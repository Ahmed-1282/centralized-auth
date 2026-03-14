# Centralized Auth — API Testing Guide

## Prerequisites

1. **PostgreSQL** running on `localhost:5432` with database `centralized_auth`
2. **Schema created** — run `sql/001_auth_schema.sql`
3. **Seed data loaded** — run `sql/003_seed_data.sql`
4. **Superadmin user created** — run:
   ```sql
   INSERT INTO users (username, email, password_hash, full_name, is_active, is_system_user)
   VALUES (
     'superadmin',
     'superadmin@system.local',
     '$2b$12$lZ17W0XKGvPcyFW7LSK2teFp4nyL9atJ86swRjcfg9h/lrYreM/gy',
     'Super Admin', true, true
   );
   ```
   Password: `Password@123`

5. **Dependencies installed** — `npm install`

## How to Run

### Step 1: Start the server
```bash
npm run start:dev
```

### Step 2: Run the E2E test pipeline
```bash
npm run dev:test
```

This runs **65 automated tests** across **11 modules** sequentially with verbose output.

## What Happens When Tests Run

1. **Health check** — verifies the server is running at `http://localhost:3001`
2. **65 tests execute** sequentially across 11 modules (each module produces IDs for the next)
3. **Report saved to database** — test results are inserted into `test_report_runs` and `test_report_results` tables
4. **Console summary** prints pass/fail per module with timing + links to view report in browser
5. **Database cleanup** — all test data is hard-deleted via raw SQL queries (13 tables cleaned in FK-safe order)

The database is left clean after every run — no test data remains.

## Test Pipeline Structure

All tests are in `test/api-pipeline.e2e-spec.ts`. They run in order because each module produces IDs needed by subsequent modules.

```
Auth (login) --> accessToken
    |
    v
Partners (create) --> partnerId
    |
    v
Users (create with partnerId) --> userId
    |
    v
Roles (create, fetch permissions) --> roleId, permissionId
    |
    v
Permissions (user overrides, partner toggles)
    |
    v
Agents (create with partnerId) --> agentId
    |
    v
API Keys (create with partnerId) --> apiKeyId
    |
    v
Auth Negative Cases (no token, bad token, wrong creds, deactivated user)
    |
    v
Token Lifecycle (rotation, revocation, logout-all edge cases)
    |
    v
Non-System User Flow (partner user login, profile, access, refresh)
    |
    v
Validation & Errors (duplicates, 404s, bad input)
    |
    v
afterAll: Save report to DB + cleanup test data (hard delete)
```

## Test Cases (65 total)

### 1. Auth Module — 5 tests (happy path)

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 1 | POST | `/api/auth/login` | Login with superadmin credentials |
| 2 | POST | `/api/auth/refresh` | Refresh access token (token rotation) |
| 3 | GET | `/api/auth/me` | Get current user profile |
| 4 | POST | `/api/auth/logout` | Revoke a specific refresh token |
| 5 | POST | `/api/auth/logout-all` | Revoke all refresh tokens |

**Login payload:**
```json
{
  "username": "superadmin",
  "password": "Password@123"
}
```

**Login response:**
```json
{
  "status": "success",
  "message": "Login successful",
  "data": {
    "tokens": { "accessToken": "...", "refreshToken": "..." },
    "user": { "userId": "...", "username": "superadmin", "isSystemUser": true }
  }
}
```

### 2. Partners Module — 7 tests

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 6 | POST | `/api/partners` | Create a new partner |
| 7 | GET | `/api/partners` | List all partners |
| 8 | GET | `/api/partners/:id` | Get partner by ID |
| 9 | PATCH | `/api/partners/:id` | Update partner |
| 10 | POST | `/api/partners/:id/dashboards` | Toggle dashboard access |
| 11 | GET | `/api/partners/:id/dashboards` | Get dashboard access list |
| 12 | DELETE | `/api/partners/:id` | Soft delete partner |

### 3. Users Module — 6 tests

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 13 | POST | `/api/users` | Create a new user |
| 14 | GET | `/api/users` | List users (supports ?partnerId, ?isActive, ?limit, ?offset) |
| 15 | GET | `/api/users/:id` | Get user by ID |
| 16 | PATCH | `/api/users/:id` | Update user |
| 17 | PATCH | `/api/users/:id/password` | Change password |
| 18 | DELETE | `/api/users/:id` | Soft delete user |

### 4. Roles Module — 7 tests

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 19 | POST | `/api/roles` | Create a custom role |
| 20 | GET | `/api/roles` | List roles (supports ?dashboardCode) |
| 21 | GET | `/api/roles/:id` | Get role with permissions |
| 22 | PATCH | `/api/roles/:id/permissions` | Set permissions for role |
| 23 | POST | `/api/roles/assign` | Assign role to user |
| 24 | GET | `/api/roles/user/:userId` | Get all roles for a user |
| 25 | POST | `/api/roles/revoke` | Revoke role from user |

### 5. Permissions Module — 7 tests

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 26 | POST | `/api/permissions` | Create a permission |
| 27 | GET | `/api/permissions` | List permissions (?dashboardCode, ?module) |
| 28 | POST | `/api/permissions/user` | Set direct user permission override |
| 29 | GET | `/api/permissions/user/:userId` | Get user's direct permissions |
| 30 | DELETE | `/api/permissions/user/:userId/:permId` | Remove user permission override |
| 31 | POST | `/api/permissions/partner-toggle` | Set partner feature toggle |
| 32 | GET | `/api/permissions/partner-toggle/:partnerId` | Get partner feature toggles |

### 6. Agents Module — 5 tests

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 33 | POST | `/api/agents` | Create a field agent |
| 34 | GET | `/api/agents` | List agents (?partnerId, ?status, ?limit, ?offset) |
| 35 | GET | `/api/agents/:id` | Get agent by ID |
| 36 | PATCH | `/api/agents/:id` | Update agent |
| 37 | DELETE | `/api/agents/:id` | Delete agent |

### 7. API Keys Module — 3 tests

| # | Method | Endpoint | Description |
|---|--------|----------|-------------|
| 38 | POST | `/api/api-keys` | Create API key (raw key shown once) |
| 39 | GET | `/api/api-keys` | List API keys (?partnerId) |
| 40 | DELETE | `/api/api-keys/:id` | Revoke API key |

### 8. Auth Negative Cases — 8 tests

| # | Method | Endpoint | Expected | Description |
|---|--------|----------|----------|-------------|
| 41 | GET | `/api/auth/me` | 401 | No token on protected endpoint |
| 42 | GET | `/api/auth/me` | 401 | Invalid/garbage Bearer token |
| 43 | POST | `/api/auth/login` | 401 | Wrong password |
| 44 | POST | `/api/auth/login` | 401 | Non-existent username |
| 45 | POST | `/api/auth/login` | 400 | Empty request body (validation fails) |
| 46 | POST | `/api/auth/refresh` | 401 | Invalid refresh token string |
| 47 | POST | `/api/auth/refresh` | 401 | Already-revoked refresh token |
| 48 | POST | `/api/auth/login` | 403 | Deactivated user account |

**Error response format:**
```json
{
  "status": "error",
  "message": "Invalid credentials",
  "data": null
}
```

### 9. Token Lifecycle — 5 tests

| # | Method | Endpoint | Expected | Description |
|---|--------|----------|----------|-------------|
| 49 | POST | `/api/auth/refresh` | 401 | Old refresh token invalid after rotation |
| 50 | POST | `/api/auth/refresh` | 401 | All refresh tokens rejected after logout-all |
| 51 | POST | `/api/auth/login` | 200 | Fresh login still works after logout-all |
| 52 | GET | `/api/auth/me` | 200 | Access token stays valid after single logout (JWT stateless) |
| 53 | POST | `/api/auth/refresh` | 401 | Double-refresh fails (token already rotated) |

### 10. Non-System User Auth Flow — 4 tests

| # | Method | Endpoint | Expected | Description |
|---|--------|----------|----------|-------------|
| 54 | POST | `/api/auth/login` | 200 | Login as partner user (non-system) |
| 55 | GET | `/api/auth/me` | 200 | Profile shows partnerId, isSystemUser=false |
| 56 | GET | `/api/partners` | 200 | Partner user can access protected endpoints |
| 57 | POST | `/api/auth/refresh` | 200 | Refresh token works for partner user |

### 11. Validation & Error Handling — 8 tests

| # | Method | Endpoint | Expected | Description |
|---|--------|----------|----------|-------------|
| 58 | POST | `/api/users` | 409 | Duplicate username rejected |
| 59 | GET | `/api/partners/:id` | 404 | Non-existent partner |
| 60 | GET | `/api/users/:id` | 404 | Non-existent user |
| 61 | GET | `/api/roles/:id` | 404 | Non-existent role |
| 62 | GET | `/api/agents/:id` | 404 | Non-existent agent |
| 63 | POST | `/api/roles/revoke` | 400 | Revoke non-existent role assignment |
| 64 | POST | `/api/agents` | 409 | Duplicate msisdn for same partner |
| 65 | DELETE | `/api/api-keys/:id` | 404 | Revoke non-existent API key |

## Response Format

All endpoints return a standardized response:

**Success:**
```json
{
  "status": "success",
  "message": "...",
  "data": { ... }
}
```

**Error:**
```json
{
  "status": "error",
  "message": "...",
  "data": null
}
```

## Authentication

All endpoints (except login and refresh) require a Bearer token:

```
Authorization: Bearer <accessToken>
```

The access token expires in **15 minutes** (900 seconds). Use the refresh endpoint to get a new token pair.

**Token rotation:** When you call `/api/auth/refresh`, the old refresh token is revoked and a new pair is issued. You cannot reuse the old refresh token.

**Logout behavior:** `POST /api/auth/logout` revokes a single refresh token. The access token (JWT) remains valid until it expires — it's stateless and cannot be individually revoked. `POST /api/auth/logout-all` revokes all refresh tokens for the user.

## Test Reports (Database-Backed)

Test results are stored in two PostgreSQL tables:

| Table | Purpose |
|-------|---------|
| `test_report_runs` | One row per test run (totals, pass/fail counts, module summary as JSONB) |
| `test_report_results` | One row per individual test (module, method, endpoint, status, duration, etc.) |

Reports persist across test runs — each run creates a new entry. Test **data** is cleaned up, but test **reports** are kept.

### Viewing Reports in Browser

| URL | Description |
|-----|-------------|
| `http://localhost:3001/api/test-reports/latest/html` | Latest report as styled HTML page |
| `http://localhost:3001/api/test-reports/index` | Index page listing all test runs |
| `http://localhost:3001/api/test-reports/:runId/html` | Specific run as styled HTML |
| `http://localhost:3001/api/test-reports` | List all runs (JSON API) |
| `http://localhost:3001/api/test-reports/:runId` | Specific run with all results (JSON API) |

The HTML reports feature:
- Dark theme matching Swagger UI
- Summary stats (total, passed, failed, duration)
- Module-level breakdown with color-coded cards (green=pass, red=fail)
- Full results table with method badges (GET=blue, POST=green, PATCH=orange, DELETE=red) and PASS/FAIL indicators

All report endpoints are **public** (no authentication required). Reports are also visible in Swagger under the "Test Reports" tag.

> **Note:** The server must be running (`npm run start:dev`) to access reports in the browser.

## Database Cleanup

After all tests complete, the pipeline connects directly to PostgreSQL (using `.env.local` credentials) and **hard-deletes** all test data in FK-safe order:

```
1.  audit_logs        (by resource_id)
2.  refresh_tokens    (by user_id)
3.  user_permissions  (by user_id)
4.  user_roles        (by user_id)
5.  role_permissions  (by role_id)
6.  partner_feature_toggles (by partner_id)
7.  partner_dashboards      (by partner_id)
8.  api_keys          (by partner_id)
9.  agents            (by partner_id)
10. users             (by user_id)
11. roles             (by role_id)
12. permissions       (by permission_id)
13. partners          (by partner_id)
```

This includes throwaway records created for tests (e.g. `delete-me-<timestamp>` partner, `e2e_deluser_<timestamp>` user, `e2e_deactivated_<timestamp>` user). Seeded data and the superadmin user are never touched.

## Expected Output

```
Auth Module (/api/auth)
  ✓ POST /api/auth/login — should login with superadmin (250 ms)
  ✓ POST /api/auth/refresh — should refresh the access token (200 ms)
  ✓ GET /api/auth/me — should return current user profile (50 ms)
  ✓ POST /api/auth/logout — should revoke a specific refresh token (300 ms)
  ✓ POST /api/auth/logout-all — should revoke all refresh tokens (350 ms)

Partners Module (/api/partners)
  ✓ POST /api/partners — should create a new partner (80 ms)
  ...

Auth Negative Cases
  ✓ GET /api/auth/me — should reject request with no token (30 ms)
  ✓ GET /api/auth/me — should reject invalid/garbage token (25 ms)
  ✓ POST /api/auth/login — should reject wrong password (200 ms)
  ✓ POST /api/auth/login — should reject non-existent username (180 ms)
  ✓ POST /api/auth/login — should reject empty body (20 ms)
  ✓ POST /api/auth/refresh — should reject invalid refresh token (150 ms)
  ✓ POST /api/auth/refresh — should reject already-revoked refresh token (400 ms)
  ✓ POST /api/auth/login — should reject deactivated user (300 ms)

Token Lifecycle
  ✓ should invalidate old refresh token after rotation (400 ms)
  ✓ should reject all refresh tokens after logout-all (350 ms)
  ✓ should allow fresh login after logout-all (250 ms)
  ✓ should keep access token valid after single-token logout (300 ms)
  ✓ should fail double-refresh (second use of rotated token) (400 ms)

Non-System User Auth Flow
  ✓ POST /api/auth/login — should login as partner user (250 ms)
  ✓ GET /api/auth/me — should show partner user profile (40 ms)
  ✓ GET /api/partners — should access protected endpoint as partner user (30 ms)
  ✓ POST /api/auth/refresh — should refresh token as partner user (200 ms)

Validation & Error Handling
  ✓ POST /api/users — should reject duplicate username (50 ms)
  ✓ GET /api/partners/:id — should 404 for non-existent partner (30 ms)
  ...

========================================
  E2E TEST REPORT
========================================
  PASS  Auth: 5/5 (1150ms)
  PASS  Partners: 7/7 (420ms)
  PASS  Users: 6/6 (380ms)
  PASS  Roles: 7/7 (310ms)
  PASS  Permissions: 7/7 (280ms)
  PASS  Agents: 5/5 (200ms)
  PASS  API Keys: 3/3 (150ms)
  PASS  Auth Negative: 8/8 (1300ms)
  PASS  Token Lifecycle: 5/5 (1700ms)
  PASS  Non-System User: 4/4 (520ms)
  PASS  Validation: 8/8 (350ms)
----------------------------------------
  Total: 65 | Passed: 65 | Failed: 0 | Time: 6760ms
  Report saved to database
  View:  http://localhost:3001/api/test-reports/<run-id>/html
  Latest: http://localhost:3001/api/test-reports/latest/html
  Index: http://localhost:3001/api/test-reports/index
========================================
  Cleanup: all test data removed from database

Test Suites: 1 passed, 1 total
Tests:       65 passed, 65 total
```

## Troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| `Server not running at http://localhost:3001` | Server not started | Run `npm run start:dev` first |
| `Invalid credentials` on login | Superadmin user not in DB | Insert the superadmin user (see Prerequisites) |
| `Unauthorized` on all endpoints | Token expired instantly | Ensure `JWT_ACCESS_TTL=900` in `.env.local` (fixed: `Number()` conversion) |
| `unique constraint` errors | Re-running tests | Tests use `Date.now()` suffix — should be idempotent. If still failing, old test data exists. |
| `Dashboard not found` | Seed data not loaded | Run `sql/003_seed_data.sql` |
| Timeout errors | Bcrypt is slow with 12 rounds | `testTimeout: 30000` in jest config handles this |
| `Cleanup failed` | DB connection issue | Check `.env.local` has correct DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS |
| Auth negative tests failing with wrong status | Response format mismatch | Ensure `AllExceptionsFilter` is applied globally in `app.module.ts` |

## npm Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Start server (local DB via `.env.local`) |
| `npm run start:dev:prod` | Start server (production DB via `.env.prod`) |
| `npm run dev:test` | Run E2E API test pipeline (65 tests + DB report + cleanup) |
| `npm run test:e2e` | Run all E2E tests (including app.e2e-spec.ts) |
| `npm run test` | Run unit tests |
