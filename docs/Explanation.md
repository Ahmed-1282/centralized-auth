# GIS Auth - Complete Explanation

A complete, manager-friendly explanation of the database schema and application flows.

---

## Overview

The system has **10 tables** organized into **4 layers**. Think of it like a building — each layer has a purpose.

```
┌─────────────────────────────────────────────────────────┐
│  Layer 1: AUTHENTICATION      → Who are you?            │
│  Layer 2: AUTHORIZATION       → What can you do?        │
│  Layer 3: PARTNER MANAGEMENT  → Which company?          │
│  Layer 4: AUDIT & TESTING     → What happened?          │
└─────────────────────────────────────────────────────────┘
```

---

## Layer 1: Authentication (Who are you?)

### `users` — The People

This is the **main table**. Every person who logs into the system has a record here.

| Column | Purpose |
|--------|---------|
| `user_id` | Unique identifier (UUID) |
| `username` | Login name |
| `email` | Email address (optional) |
| `password_hash` | Password stored encrypted — never in plain text |
| `full_name` | Display name |
| `phone` | Contact number |
| `avatar_url` | Profile picture link |
| `is_active` | We can disable an account without deleting it |
| `is_system_user` | Some accounts are for the system itself, not real people |
| `partner_id` | Which partner company this user belongs to (nullable) |
| `last_login_at` | When they last logged in |
| `deleted_at` | **Soft delete** — instead of permanently deleting, we mark them as deleted. Keeps history and allows recovery |

#### System Users vs Regular Users

- **Regular users** → `partner_id` is filled — they belong to a partner company
- **System users** (`is_system_user = true`) → `partner_id` can be `null` — they don't belong to any partner

A "system user" is like an **internal service account** — it's not a real person from a client company. It exists for the system itself to perform automated tasks (e.g., running scheduled jobs, seeding data, internal API calls). Since it doesn't represent anyone from a partner organization, it doesn't need a `partner_id`.

Think of it like:
- **Partner user** = "Ahmed from BKK" → has a partner_id pointing to BKK
- **System user** = "the system itself" → no partner, partner_id = null

---

### `refresh_tokens` — Login Sessions

When a user logs in, they get two tokens: a short-lived **access token** (~15 min) and a long-lived **refresh token** (days). This table stores the refresh tokens.

| Column | Purpose |
|--------|---------|
| `token_hash` | Token stored **encrypted** — even if the database is stolen, tokens can't be used |
| `device_info` | Which browser/device they logged in from (JSON) |
| `ip_address` | Their IP address |
| `expires_at` | When the token expires |
| `revoked_at` | If we forcefully log someone out, we mark it here |

**Why?** — Industry-standard **JWT authentication**. Lets users stay logged in without re-entering passwords, while giving us the ability to revoke access instantly (e.g., if an account is compromised).

---

## Layer 2: Authorization (What can you do?)

### `roles` — Roles + Permissions Combined

Each role represents an **access level within a specific dashboard**. Roles now contain permissions directly as a JSONB field.

| Column | Purpose |
|--------|---------|
| `role_id` | Unique identifier (UUID) |
| `dashboard` | Which dashboard this role belongs to (varchar, e.g. `crop_monitoring`, `weather`) |
| `code` | Short unique identifier like `field_manager` |
| `name` | Human-readable name like "Field Manager" |
| `description` | What this role can do |
| `permissions` | JSONB object — will hold permission key-value pairs once business defines them (empty `{}` for now) |
| `is_system_role` | Built-in role or custom-created |

**Key rule:** A user can have **multiple roles** but only **ONE role per dashboard**. Example: Ahmed can be `admin` on Crop Monitoring AND `viewer` on Weather, but NOT both `admin` and `viewer` on Crop Monitoring.

#### System Roles vs Custom Roles (`is_system_role`)

Think of it like a phone:
- **System roles** (`true`) = apps that come **pre-installed** (Camera, Phone, Settings). You can't delete them.
- **Custom roles** (`false`) = apps **you download** yourself (WhatsApp, Instagram). You created them, you can modify or delete them.

#### About Permissions (JSONB)

The `permissions` column is a flexible JSONB field. It's currently empty `{}` because the exact permission structure hasn't been defined by the business yet. Once defined, it will hold key-value pairs like:

```json
{
  "farms.view": true,
  "farms.manage": true,
  "reports.export": false
}
```

This approach is simpler than having separate permissions/role_permissions tables — everything lives in one place.

---

### `user_roles` — Which User Has Which Role?

Assigns roles to users, with a full **audit trail**:

| Column | Purpose |
|--------|---------|
| `user_id` | The user |
| `role_id` | The role assigned |
| `granted_by` | Which admin assigned this role |
| `granted_at` | When it was assigned |
| `revoked_at` | When/if it was revoked (without deleting the record) |

**Why?** — We can track **who gave whom access and when** — critical for security audits and compliance.

---

## Layer 3: Partner Management (Which company?)

### `partners` — The Companies / Organizations

Partners are the **client companies** using the GIS platform. Think of it as **multi-tenancy** — each company is a tenant.

| Column | Purpose |
|--------|---------|
| `name, slug, address, contact_no, email, logo_url` | Company information |
| `credits` | Balance of general credits (API usage, satellite imagery, etc.) |
| `message_credits` | Separate balance for SMS/notification credits |
| `settings` | Flexible JSON field for any partner-specific configuration |
| `allowed_dashboards` | Text array of dashboards this partner can access (e.g. `['crop_monitoring', 'weather']`) |
| `is_active` | Enable/disable the entire partner |
| `deleted_at` | Soft delete — keep history, allow recovery |

**Why?** — The platform serves multiple organizations. Each needs its own users, dashboard access, and credit balance.

#### Dashboard Access Control (Simplified)

Instead of a separate `partner_dashboards` table, each partner now has an `allowed_dashboards` array directly on their record:

```json
["crop_monitoring", "insights", "field_survey"]
```

- Partner A might only have `["crop_monitoring"]`
- Partner B might have `["crop_monitoring", "insights", "cane_monitoring"]`

Simple, clean, no extra table needed.

---

### `agents` — Field Representatives

Agents are **people on the ground** — field workers, extension officers, etc.

| Column | Purpose |
|--------|---------|
| `msisdn` | Mobile phone number (primary identifier for field workers) |
| `home_location` | GPS coordinates stored as JSON `{lat, lng}` |
| `status` | active, inactive, or suspended |
| `user_id` | Optionally linked to a web user account |
| `partner_id` | Which company they work for |

**Why?** — GIS systems often have field agents collecting data. This table tracks them, their location, and links them to both a partner and optionally a web user account.

---

### `api_keys` — Machine-to-Machine Access

For external systems or apps that need to call the API programmatically (not through a browser):

| Column | Purpose |
|--------|---------|
| `key_hash` | API key stored **encrypted** (raw key is never stored) |
| `key_prefix` | First 12 characters shown in UI so admins can identify keys (like `gis_a8f3b2...`) |
| `scopes` | Array of allowed actions (e.g., `['farms.read', 'indices.read']`) |
| `rate_limit` | Max requests per minute (default 60) |
| `expires_at` | Optional expiration date |

**Why?** — Partners may have their own apps that need data from the system. API keys let machines authenticate securely with controlled access and rate limits.

---

## Layer 4: Audit & Testing

### `audit_logs` — Who did what and when?

Every important action in the system gets logged:

| Column | Purpose |
|--------|---------|
| `action` | What happened (`LOGIN`, `CREATE_USER`, `UPDATE_ROLE`, etc.) |
| `resource_type` + `resource_id` | Which entity was affected |
| `details` | Flexible JSON with before/after values or extra context |
| `ip_address`, `user_agent` | Where the action came from |

**Why?** — **Compliance and security**. If something goes wrong, you can trace exactly who did what, when, and from where.

---

### `test_report_runs` + `test_report_results` — Automated Test Reports

These two tables store results from automated E2E (end-to-end) testing:

- **test_report_runs** — summary of a test run (total tests, passed, failed, duration)
- **test_report_results** — individual test results (which endpoint was tested, expected vs actual status, pass/fail, error message)

**Why?** — Database-backed dashboard to track test health over time, catch regressions, and demonstrate quality assurance to stakeholders.

---

## The Big Picture

```
                    ┌──────────────┐
                    │   PARTNERS   │  ← Client companies (multi-tenant)
                    │  (Companies) │
                    │              │
                    │ allowed_dashboards:
                    │ ['crop_monitoring',
                    │  'weather']  │
                    └──────┬───────┘
                           │ has many
              ┌────────────┼────────────┐
              │            │            │
        ┌─────▼────┐ ┌────▼─────┐ ┌───▼──────┐
        │  USERS   │ │  AGENTS  │ │ API KEYS │
        │(People)  │ │ (Field)  │ │(Machines)│
        └─────┬────┘ └──────────┘ └──────────┘
              │
              │ assigned via user_roles
              │ (one role per dashboard)
              │
        ┌─────▼────────────────────────┐
        │         ROLES                │
        │  dashboard: 'crop_monitoring'│
        │  code: 'field_manager'       │
        │  permissions: { ... JSONB }  │
        └──────────────────────────────┘
```

---

## Key Design Decisions

| Decision | Why |
|----------|-----|
| **UUIDs** for all IDs | Globally unique, safe for distributed systems, no sequential guessing |
| **Soft deletes** (users, partners) | Keep history, enable recovery, maintain referential integrity |
| **JSONB permissions on roles** | Simpler than separate permissions/role_permissions tables — everything in one place |
| **`allowed_dashboards` array on partners** | Simpler than a separate partner_dashboards table |
| **Dashboard as varchar on roles** | No need for a separate dashboards table — dashboard is just a string identifier |
| **One role per dashboard per user** | Users can access multiple dashboards but with one clear role each |
| **Audit trail on assignments** | `granted_by`, `granted_at`, `revoked_at` — full accountability |
| **Encrypted tokens & keys** | Passwords, refresh tokens, API keys all hashed — security best practice |
| **Rate limiting on API keys** | Prevents abuse, protects system resources |
| **Credits system on partners** | Built-in billing/usage tracking per company |

---

## Summary

This is a **simplified Role-Based Access Control (RBAC)** system with **multi-tenant partner management**, **field agent tracking**, and **comprehensive audit logging** — built for the GIS Agriculture Monitoring Platform.

**10 tables total:** users, refresh_tokens, roles, user_roles, partners, agents, api_keys, audit_logs, test_report_runs, test_report_results.

---
---

# Application Flows Explanation (Beyond the Database)

Everything above explained **what data we store**. Below explains **how the application actually works** — the flows, security, API structure, and architecture.

---

## 1. Authentication Flow (How Login Works)

Think of authentication like entering a secure building. You show your ID at the door, get a visitor badge, and that badge lets you move around.

### Step-by-step: User Logs In

```
User                          Server                         Database
  │                              │                              │
  │── POST /api/auth/login ─────>│                              │
  │   (username + password)      │                              │
  │                              │── Find user by username ────>│
  │                              │<── User record ──────────────│
  │                              │                              │
  │                              │── Compare password (bcrypt) ─│
  │                              │── Check if user is active ───│
  │                              │── Load user's roles ────────>│
  │                              │<── Roles data ───────────────│
  │                              │                              │
  │                              │── Generate Access Token (JWT)│
  │                              │── Generate Refresh Token ────│
  │                              │── Store refresh token hash ─>│
  │                              │── Update lastLoginAt ───────>│
  │                              │── Write audit log ──────────>│
  │                              │                              │
  │<── Return tokens + profile ──│                              │
```

**In simple words:**
1. User sends their username and password
2. Server finds the user, checks the password is correct
3. Server checks the account isn't disabled
4. Server creates two "passes":
   - **Access Token** (short-lived, ~15 minutes) — like a visitor badge, used for every request
   - **Refresh Token** (long-lived, ~7 days) — like a parking ticket, used only to get a new badge when the old one expires
5. Server saves the refresh token in the database (encrypted)
6. Server logs "user X logged in" in audit logs
7. User gets back both tokens + their profile info

### What's Inside the Access Token (JWT)?

The access token is a **JSON Web Token** — a signed piece of data the server can verify without checking the database every time.

```
{
  "sub": "user-uuid-here",           // Who is this
  "username": "ahmed",                // Their username
  "partnerId": "partner-uuid",       // Which company
  "isSystemUser": false,             // Regular user or system account
  "roles": [                         // What roles they have
    { "dashboard": "crop_monitoring", "roleCode": "admin" },
    { "dashboard": "weather", "roleCode": "viewer" }
  ]
}
```

**Why JWT?** — The server doesn't need to hit the database on every request to check "is this user valid?" The token itself contains the proof. This makes the system **fast and scalable**.

### Token Refresh Flow (Getting a New Badge)

When the access token expires (~15 min), the frontend doesn't ask the user to log in again. Instead:

```
Frontend                      Server                         Database
  │                              │                              │
  │── POST /api/auth/refresh ───>│                              │
  │   (old refresh token)        │                              │
  │                              │── Find valid refresh tokens─>│
  │                              │── Match token with bcrypt ───│
  │                              │── Revoke old token ─────────>│
  │                              │── Generate new token pair ───│
  │                              │── Store new refresh token ──>│
  │                              │                              │
  │<── New access + refresh ─────│                              │
```

**Key security feature:** The old refresh token is **revoked immediately**. This is called **token rotation** — if someone steals a refresh token, it can only be used once. After that, it's dead.

### Logout

- **Single device logout** (`POST /api/auth/logout`) — revokes just the current refresh token
- **All devices logout** (`POST /api/auth/logout-all`) — revokes ALL refresh tokens for the user

Think of it like: single logout = returning your visitor badge at one entrance. All-devices logout = canceling ALL your badges at every entrance.

---

## 2. Authorization Flow (How Permissions Are Checked)

Authentication answers "Who are you?" Authorization answers "Are you allowed to do this?"

### The Guard Chain (Security Checkpoints)

Every API request passes through **security checkpoints** (called Guards) in this order:

```
Request comes in
       │
       ▼
┌──────────────────┐     Is @Public() decorator present?
│  1. JWT Guard    │────── YES ──> Skip all checks, allow through
│  (Identity Check)│
└───────┬──────────┘
        │ NO
        ▼
   Extract & verify JWT token
   Attach user info to request
        │
        ▼
┌──────────────────┐     Does route have @Roles() decorator?
│  2. Roles Guard  │────── NO ──> Skip, allow through
│  (Role Check)    │
└───────┬──────────┘
        │ YES
        ▼
   Is user a System User?
   ├── YES ──> Allow through (system users bypass everything)
   └── NO ──> Check if user has at least ONE required role
              ├── Has role ──> Allow
              └── No role ──> 403 Forbidden
```

### In Simple Words

Think of it like entering a restricted area in an office building:

1. **JWT Guard** = "Show me your employee badge" (are you who you say you are?)
2. **Roles Guard** = "Are you a manager or above?" (do you have the right job title?)

### Special Decorators (Labels on API Endpoints)

Developers put "labels" on each API endpoint to tell the system what security to apply:

| Decorator | Meaning | Example |
|-----------|---------|---------|
| `@Public()` | No login needed, anyone can access | Health check, test reports |
| `@Roles('admin', 'manager')` | User needs at least ONE of these roles | Admin-only endpoints |
| `@CurrentUser()` | Injects the logged-in user's info into the handler | Getting "who am I" data |

---

## 3. API Structure (All Available Endpoints)

The API is organized into **modules**, each handling a specific domain. All routes start with `/api`.

### Authentication (`/api/auth`)

| Method | Endpoint | What It Does | Auth Required? |
|--------|----------|-------------|----------------|
| POST | `/api/auth/login` | Login with username & password | No |
| POST | `/api/auth/refresh` | Get new tokens using refresh token | No |
| POST | `/api/auth/logout` | Logout current device | Yes |
| POST | `/api/auth/logout-all` | Logout all devices | Yes |
| GET | `/api/auth/me` | Get my profile & roles | Yes |

### Users (`/api/users`)

| Method | Endpoint | What It Does |
|--------|----------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | List users (with filters: partnerId, isActive, limit, offset) |
| GET | `/api/users/:userId` | Get a specific user with their roles |
| PATCH | `/api/users/:userId` | Update user info (name, email, phone, active status) |
| PATCH | `/api/users/:userId/password` | Change user's password |
| DELETE | `/api/users/:userId` | Soft-delete a user |

### Partners (`/api/partners`)

| Method | Endpoint | What It Does |
|--------|----------|-------------|
| POST | `/api/partners` | Create a new partner company |
| GET | `/api/partners` | List all partners |
| GET | `/api/partners/:partnerId` | Get partner details |
| PATCH | `/api/partners/:partnerId` | Update partner info (including allowed_dashboards) |
| DELETE | `/api/partners/:partnerId` | Soft-delete a partner |

### Roles (`/api/roles`)

| Method | Endpoint | What It Does |
|--------|----------|-------------|
| POST | `/api/roles` | Create a new custom role |
| GET | `/api/roles` | List roles (filter by dashboard) |
| GET | `/api/roles/:roleId` | Get role details |
| PATCH | `/api/roles/:roleId` | Update role (including permissions JSONB) |
| POST | `/api/roles/assign` | Assign a role to a user |
| POST | `/api/roles/revoke` | Revoke a role from a user |
| GET | `/api/roles/user/:userId` | See all roles a user has |

### Agents (`/api/agents`)

| Method | Endpoint | What It Does |
|--------|----------|-------------|
| POST | `/api/agents` | Register a new field agent |
| GET | `/api/agents` | List agents (filter by partner, status) |
| GET | `/api/agents/:agentId` | Get agent details |
| PATCH | `/api/agents/:agentId` | Update agent info |
| DELETE | `/api/agents/:agentId` | Delete an agent |

### API Keys (`/api/api-keys`)

| Method | Endpoint | What It Does |
|--------|----------|-------------|
| POST | `/api/api-keys` | Create a new API key (raw key shown ONLY once!) |
| GET | `/api/api-keys` | List API keys (only prefix shown, not full key) |
| DELETE | `/api/api-keys/:apiKeyId` | Revoke an API key |

### Test Reports (`/api/test-reports`)

| Method | Endpoint | What It Does | Auth Required? |
|--------|----------|-------------|----------------|
| GET | `/api/test-reports` | List all test runs | No (Public) |
| GET | `/api/test-reports/latest/html` | Latest test report as HTML page | No (Public) |
| GET | `/api/test-reports/index` | Index page of all test runs | No (Public) |
| GET | `/api/test-reports/:runId` | Get a specific test run | No (Public) |
| GET | `/api/test-reports/:runId/html` | Test run as HTML page | No (Public) |
| DELETE | `/api/test-reports/:runId` | Delete a test run | Yes |

### Health Check

| Method | Endpoint | What It Does | Auth Required? |
|--------|----------|-------------|----------------|
| GET | `/api` | Basic health check | No |
| GET | `/api/test` | Extended health check | No |

---

## 4. Request/Response Flow (How Every API Call Works)

Every single API request follows this pipeline:

```
Client Request
       │
       ▼
┌──────────────────┐
│   CORS Check     │  Allow cross-origin requests (for dashboards on different domains)
└───────┬──────────┘
        │
        ▼
┌──────────────────┐
│  /api Prefix     │  All routes are under /api
└───────┬──────────┘
        │
        ▼
┌──────────────────┐
│ ValidationPipe   │  Check: Is the request body valid?
│                  │  (correct types, required fields, email format, etc.)
│                  │  If invalid → 400 Bad Request with error details
└───────┬──────────┘
        │
        ▼
┌──────────────────┐
│  Security Guards │  JWT → Roles
│  (see section 2) │  If unauthorized → 401/403 error
└───────┬──────────┘
        │
        ▼
┌──────────────────┐
│  Controller      │  The actual business logic runs
│  + Service       │
└───────┬──────────┘
        │
        ▼
┌──────────────────────────────┐
│  TransformResponseInterceptor│  Wraps the result in a standard format
└───────┬──────────────────────┘
        │
        ▼
   Response sent to client
```

### Standard Success Response

Every successful response looks like this:

```json
{
  "status": "success",
  "message": "Request successful",
  "data": { ... actual data here ... }
}
```

### Standard Error Response

Every error response looks like this:

```json
{
  "status": "error",
  "message": "What went wrong",
  "data": null
}
```

**Why standardize?** — The frontend team always knows the exact shape of every response. No surprises. No guessing. Every response has `status`, `message`, and `data`.

---

## 5. Module Architecture (How the Code is Organized)

The app follows **NestJS modular architecture**. Think of it like departments in a company — each module handles one domain.

```
AppModule (the company)
│
├── ConfigModule ──────── Environment settings (.env files)
│                         DB_HOST, JWT_SECRET, etc.
│
├── TypeOrmModule ─────── Database connection (PostgreSQL)
│
├── AuditModule ───────── Logging service (used by ALL modules)
│   └── Every important action gets logged
│
├── AuthModule ────────── Login, logout, tokens, profile
│   ├── Uses JWT + Passport for authentication
│   └── Exports: AuthService, JwtModule
│
├── UsersModule ───────── Create, read, update, delete users
│
├── PartnersModule ────── Manage partner companies & dashboard access
│
├── RolesModule ───────── Create roles, assign/revoke roles to users
│
├── AgentsModule ──────── Manage field agents
│
├── ApiKeysModule ─────── Create/revoke API keys
│
└── TestReportsModule ─── Store & display E2E test results
```

**Each module contains:**
- **Controller** — handles HTTP requests (the "receptionist")
- **Service** — contains business logic (the "worker")
- **DTOs** — defines what data is expected/returned (the "forms")
- **Entities** — maps to database tables (already explained above)

---

## 6. Validation & DTOs (How We Ensure Clean Data)

Before any data enters the system, it goes through **validation**. DTOs (Data Transfer Objects) are like **forms** — they define exactly what fields are required and what format they should be in.

### Example: Creating a User

```
What the frontend sends:          What the DTO enforces:
{                                  username: required, must be string
  "username": "ahmed",             password: required, minimum 6 characters
  "password": "pass123",           email: optional, must be valid email format
  "email": "ahmed@bkk.com",       partnerId: optional, must be valid UUID
  "partnerId": "some-uuid"        isSystemUser: optional, must be boolean
}
```

If validation fails, the user gets a clear error:
```json
{
  "status": "error",
  "message": ["password must be longer than or equal to 6 characters"],
  "data": null
}
```

**Why?** — Prevents bad data from ever reaching the database. No SQL injection, no invalid formats, no missing required fields.

---

## 7. Security Measures (How We Keep Things Safe)

| Measure | What It Does |
|---------|-------------|
| **Bcrypt password hashing** (12 rounds) | Passwords are never stored in plain text. Even we can't read them. |
| **Bcrypt token hashing** | Refresh tokens & API keys are also encrypted in the database |
| **JWT signed tokens** | Access tokens are cryptographically signed — can't be tampered with |
| **Token rotation** | Old refresh token is revoked when a new one is issued |
| **Soft deletes** | Data is never truly lost — can be recovered |
| **Audit logging** | Every action is tracked with who, what, when, and from where |
| **Input validation** | All data is validated before processing (prevents injection attacks) |
| **Rate limiting** (API keys) | Prevents abuse — max requests per minute |
| **CORS enabled** | Controls which frontend domains can call the API |
| **IP tracking** | Login sessions track IP address for security monitoring |
| **Device tracking** | Login sessions track browser/device info |

---

## 8. Error Handling (What Happens When Things Go Wrong)

The system has a **global exception filter** — a safety net that catches ALL errors and returns a clean response.

| Error Type | When It Happens | HTTP Code |
|------------|----------------|-----------|
| `UnauthorizedException` | Invalid credentials, expired/invalid token | 401 |
| `ForbiddenException` | Account deactivated, insufficient permissions | 403 |
| `NotFoundException` | User/role/partner not found | 404 |
| `ConflictException` | Duplicate username, email, or phone number | 409 |
| `BadRequestException` | Invalid input data (validation failed) | 400 |
| Any unexpected error | Server bug, database down, etc. | 500 |

**Why a global filter?** — No matter what goes wrong, the frontend always gets a predictable response format. No ugly stack traces, no raw database errors leaking to users.

---

## 9. E2E Testing & Reports (How We Verify Everything Works)

The system has automated **end-to-end tests** that test every API endpoint:

```
Test Runner                    API Server                    Database
    │                              │                              │
    │── Run all tests ────────────>│                              │
    │   (login, create user,       │                              │
    │    assign role, etc.)        │                              │
    │                              │                              │
    │<── Collect results ──────────│                              │
    │                              │                              │
    │── POST results to DB ───────>│── Store test_report_runs ──>│
    │                              │── Store test_report_results >│
    │                              │                              │
    │── View HTML report ─────────>│── Build styled HTML page ───│
```

Test reports are **publicly accessible** (no login needed) so stakeholders can check them:
- `/api/test-reports/latest/html` — latest test report as a styled HTML page
- `/api/test-reports/index` — index listing all test runs

---

## 10. Complete Flow Example (End to End)

Here's a real-world scenario showing everything working together:

**Scenario: "Ahmed from BKK logs in and views crop monitoring data"**

```
1. PARTNER SETUP (done by super admin)
   └── Partner "BKK" created with allowed_dashboards: ['crop_monitoring']

2. USER SETUP (done by admin)
   ├── User "ahmed" created, linked to partner "BKK"
   └── Role "field_manager" (dashboard: crop_monitoring) assigned to ahmed via user_roles

3. LOGIN
   ├── Ahmed sends: POST /api/auth/login {username: "ahmed", password: "***"}
   ├── Server validates credentials
   ├── Server generates JWT with roles: [{dashboard: "crop_monitoring", roleCode: "field_manager"}]
   ├── Audit log: "user.login" by ahmed
   └── Ahmed receives: accessToken + refreshToken

4. ACCESS PROTECTED ENDPOINT
   ├── Ahmed sends: GET /api/some-crop-endpoint
   │   Header: Authorization: Bearer <accessToken>
   │
   ├── JWT Guard: ✅ Token is valid, user is ahmed
   ├── Roles Guard: ✅ ahmed has "field_manager" role
   │
   └── Response: { status: "success", data: { ... crop data ... } }

5. TOKEN EXPIRES (after 15 min)
   ├── Ahmed sends: POST /api/auth/refresh {refreshToken: "old-token"}
   ├── Server revokes old token, issues new pair
   └── Ahmed continues using new access token

6. LOGOUT
   ├── Ahmed sends: POST /api/auth/logout {refreshToken: "current-token"}
   ├── Server revokes the token
   ├── Audit log: "user.logout" by ahmed
   └── Ahmed must login again to use the system
```

---

## Summary

| Component | Purpose |
|-----------|---------|
| **Authentication** | Verifies identity using JWT tokens with automatic refresh |
| **Authorization** | 2-layer guard system (JWT → Roles) |
| **API Structure** | RESTful endpoints organized by domain (users, partners, roles, etc.) |
| **Validation** | DTOs enforce data rules before anything touches the database |
| **Response Format** | Every response follows the same `{status, message, data}` format |
| **Security** | Bcrypt hashing, token rotation, audit logs, rate limiting, CORS |
| **Error Handling** | Global filter catches all errors and returns clean responses |
| **Testing** | Automated E2E tests with database-backed HTML reports |
| **Architecture** | Modular NestJS design — each domain in its own module |

The system is built as an **enterprise-grade authentication & authorization service** that can support multiple client companies (partners), each with their own users, dashboards, and role configurations — all secured, audited, and tested.
