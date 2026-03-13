# GIS Auth - Complete Authentication & Authorization System

## Table of Contents

1. [Overview](#1-overview)
2. [Architecture](#2-architecture)
3. [Database Schema](#3-database-schema)
4. [Entity Relationship Diagram](#4-entity-relationship-diagram)
5. [Authentication Flow](#5-authentication-flow)
6. [Authorization (Guards) Flow](#6-authorization-guards-flow)
7. [Module Architecture](#7-module-architecture)
8. [API Endpoints](#8-api-endpoints)
9. [Dashboards & Roles](#9-dashboards--roles)
10. [SQL Setup Strategy](#10-sql-setup-strategy)
11. [Key Design Decisions](#11-key-design-decisions)
12. [Setup & Deployment](#12-setup--deployment)

---

## 1. Overview

The Agriculture Monitoring Platform consists of **6 interconnected dashboards** that serve different user types across partners, field agents, mill operators, and internal staff:

| # | Dashboard | Purpose |
|---|-----------|---------|
| 1 | **Crop Monitoring Portal** | Partner-based remote farm health monitoring (NDVI, anomalies, advisory) |
| 2 | **Insights Dashboard** | Central GIS layer repository with cross-dashboard analytics |
| 3 | **Cane Monitoring Dashboard** | Sugar mill operations, harvest tracking, farmer management |
| 4 | **Admin Dashboard** | Master control panel for all dashboards, users, and data |
| 5 | **Field Survey Dashboard** | Agent management, QA, payroll, survey data pipeline |
| 6 | **Field Survey App** | Mobile data collection - surveys, tasks, offline sync |

This system provides **centralized authentication** (JWT-based) and **multi-tenant RBAC** (Role-Based Access Control) across all 6 dashboards.

### Core Concepts

- **Partner** = An organization/company (e.g., an agricultural company). Partners have users and field agents.
- **User** = A person who logs into the platform. Belongs to a partner (or is a system user with no partner).
- **Agent** = A field agent who collects data on the ground. Belongs to a partner, optionally linked to a user account.
- **Role** = A named access level scoped to a specific dashboard, with permissions stored as JSONB. A user can hold one role per dashboard.
- **System User** = Internal BKK staff / super admins with no partner. They bypass partner-level restrictions.

---

## 2. Architecture

### Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | NestJS 11.x |
| ORM | TypeORM 0.3.28 |
| Database | PostgreSQL |
| Auth | JWT (access + refresh tokens) |
| Password Hashing | bcrypt |
| Passport Strategy | passport-jwt |
| API Docs | Swagger (OpenAPI) at `/api/docs` |
| API Prefix | `/api` |
| Response Format | `{ status, message, data }` |

### Project Structure

```
src/
├── common/
│   ├── decorators/
│   │   ├── response-message.decorator.ts    # @ResponseMessage('...')
│   │   ├── public.decorator.ts              # @Public() - skip JWT for public routes
│   │   ├── roles.decorator.ts               # @Roles('admin', 'partner_admin')
│   │   └── current-user.decorator.ts        # @CurrentUser() param decorator
│   ├── guards/
│   │   ├── jwt-auth.guard.ts                # Global JWT validation
│   │   └── roles.guard.ts                   # Role checking
│   ├── filters/                             # Exception filters
│   ├── interceptors/                        # Response transform interceptor
│   └── interfaces/
│       └── jwt-payload.interface.ts         # JwtPayload, AuthenticatedUser classes
├── entities/
│   ├── partner.entity.ts
│   ├── role.entity.ts
│   ├── user.entity.ts
│   ├── user-role.entity.ts
│   ├── agent.entity.ts
│   ├── refresh-token.entity.ts
│   ├── api-key.entity.ts
│   ├── audit-log.entity.ts
│   ├── test-report-run.entity.ts
│   ├── test-report-result.entity.ts
│   └── index.ts                             # Barrel export
├── modules/
│   ├── auth/                                # Login, refresh, logout, /me
│   ├── users/                               # User CRUD
│   ├── partners/                            # Partner CRUD
│   ├── roles/                               # Role management + user assignment
│   ├── agents/                              # Agent CRUD
│   ├── api-keys/                            # API key provisioning
│   ├── audit/                               # Audit logging service (global)
│   └── test-reports/                        # E2E test report storage & HTML views
└── sql/
    ├── 001_auth_schema.sql                  # CREATE TABLE (10 tables)
    └── 003_seed_data.sql                    # Roles seed data
```

---

## 3. Database Schema

### 10 Tables Overview

```
┌──────────────────────┐                         ┌──────────────────────┐
│      partners        │                         │     audit_logs       │
│──────────────────────│                         │──────────────────────│
│ partner_id (PK)      │                         │ log_id (PK)          │
│ name                 │                         │ user_id (FK)         │
│ slug (UNIQUE)        │                         │ action               │
│ address              │                         │ resource_type        │
│ contact_no           │                         │ resource_id          │
│ email                │                         │ details (JSONB)      │
│ logo_url             │                         │ ip_address           │
│ credits              │                         │ user_agent           │
│ message_credits      │                         │ created_at           │
│ settings (JSONB)     │                         └──────────────────────┘
│ allowed_dashboards   │
│   (TEXT[])           │
│ is_active            │
│ created_at           │
│ updated_at           │
│ deleted_at           │
└──────────────────────┘

┌──────────────────────┐
│       roles          │
│──────────────────────│
│ role_id (PK)         │
│ dashboard (VARCHAR)  │
│ code                 │
│ name                 │
│ description          │
│ permissions (JSONB)  │
│ is_system_role       │
└──────────────────────┘

┌──────────────────────┐
│       users          │
│──────────────────────│
│ user_id (PK)         │
│ username (UNIQUE)    │
│ email (UNIQUE)       │
│ password_hash        │
│ full_name            │
│ phone                │
│ avatar_url           │
│ is_active            │
│ is_system_user       │
│ partner_id (FK)      │  → NULL for system users
│ last_login_at        │
│ created_at           │
│ updated_at           │
│ deleted_at           │
└──────────────────────┘

┌──────────────────────┐     ┌──────────────────────┐
│     user_roles       │     │   refresh_tokens     │
│──────────────────────│     │──────────────────────│
│ user_role_id (PK)    │     │ token_id (PK)        │
│ user_id (FK)         │     │ user_id (FK)         │
│ role_id (FK)         │     │ token_hash           │
│ granted_by (FK)      │     │ device_info (JSONB)  │
│ granted_at           │     │ ip_address           │
│ revoked_at           │     │ expires_at           │
└──────────────────────┘     │ revoked_at           │
                              │ created_at           │
                              └──────────────────────┘

┌──────────────────────┐
│       agents         │
│──────────────────────│
│ agent_id (PK)        │
│ user_id (FK, UNIQUE) │  → optional 1:1 link to users
│ partner_id (FK)      │
│ msisdn               │
│ subscriber_name      │
│ home_location (JSONB)│
│ status               │
│ created_at           │
│ updated_at           │
└──────────────────────┘

┌──────────────────────┐
│      api_keys        │
│──────────────────────│
│ api_key_id (PK)      │
│ partner_id (FK)      │
│ key_hash             │
│ key_prefix           │
│ name                 │
│ scopes (TEXT[])      │
│ rate_limit           │
│ is_active            │
│ expires_at           │
│ last_used_at         │
│ created_by (FK)      │
│ created_at           │
└──────────────────────┘

┌──────────────────────┐     ┌──────────────────────┐
│   test_report_runs   │     │  test_report_results  │
│──────────────────────│     │──────────────────────│
│ run_id (PK)          │◄───│ run_id (FK)           │
│ total_tests          │     │ result_id (PK)        │
│ passed               │     │ module                │
│ failed               │     │ method                │
│ total_duration       │     │ endpoint              │
│ module_summary(JSONB)│     │ description           │
│ created_at           │     │ status_code           │
└──────────────────────┘     │ expected_status       │
                              │ response_status       │
                              │ passed                │
                              │ duration_ms           │
                              │ error_message         │
                              └──────────────────────┘
```

### Table Purposes

| Table | Purpose |
|-------|---------|
| `partners` | Partner organizations with settings, credits, allowed_dashboards array |
| `roles` | Named roles with dashboard scope and permissions JSONB |
| `users` | Central user accounts with bcrypt passwords, partner link |
| `user_roles` | User-to-role assignment with audit trail (granted_by, granted_at, revoked_at) |
| `refresh_tokens` | Bcrypt-hashed refresh tokens with device info, IP, expiration, revocation |
| `agents` | Field agents with optional 1:1 user link, JSONB home location |
| `api_keys` | Third-party API access with hashed keys, scopes, rate limits |
| `audit_logs` | Append-only action trail — user, action, resource, details, IP |
| `test_report_runs` | E2E test run summaries |
| `test_report_results` | Individual test outcomes per run |

---

## 4. Entity Relationship Diagram

```
    ┌──────────┐
    │ partners │
    └────┬─────┘
         │ has many
    ┌────┼──────────────┐
    v    v              v
┌──────┐ ┌──────────┐ ┌──────────┐
│users │ │  agents  │ │ api_keys │
└──┬───┘ └──────────┘ └──────────┘
   │
   │ assigned via user_roles
   v
┌──────────┐
│  roles   │  (dashboard varchar + permissions JSONB)
└──────────┘

users ──> refresh_tokens (1:N)
users ──> audit_logs (1:N)
```

**Key Relationships:**
- `users.partner_id → partners.partner_id` (nullable - NULL for system users)
- `roles.dashboard` is a varchar string (e.g., 'crop_monitoring') — no FK to a dashboards table
- `roles.permissions` is JSONB — no separate permissions table
- `partners.allowed_dashboards` is a TEXT array — no separate partner_dashboards table
- `user_roles` links users to roles (with `granted_by`, `revoked_at` for audit trail)
- `agents.user_id → users.user_id` (optional 1:1 - some agents have no web login)

---

## 5. Authentication Flow

### Login Flow

```
Client                              Server
  │                                    │
  │─── POST /api/auth/login ──────────>│
  │    { username, password }          │
  │                                    │  1. Find user by username (not deleted)
  │                                    │  2. Check user.isActive
  │                                    │  3. bcrypt.compare(password, passwordHash)
  │                                    │  4. Load user_roles with role info
  │                                    │  5. Build JWT payload with roles array
  │                                    │  6. Sign access token (15 min TTL)
  │                                    │  7. Generate random refresh token
  │                                    │  8. Hash refresh token, store in DB
  │                                    │  9. Update user.lastLoginAt
  │                                    │ 10. Log audit: 'user.login'
  │<── 200 ───────────────────────────│
  │    {                               │
  │      tokens: {                     │
  │        accessToken: "eyJ...",      │
  │        refreshToken: "gis_..."     │
  │      },                            │
  │      user: {                       │
  │        userId, username, email,    │
  │        fullName, isSystemUser,     │
  │        partnerId, partnerName,     │
  │        roles: [                    │
  │          { dashboard, roleCode,    │
  │            roleName }              │
  │        ]                           │
  │      }                             │
  │    }                               │
```

### JWT Access Token Payload

```json
{
  "sub": "550e8400-e29b-41d4-a716-446655440000",
  "username": "john.doe",
  "partnerId": "660e8400-e29b-41d4-a716-446655440001",
  "isSystemUser": false,
  "roles": [
    { "dashboard": "crop_monitoring", "roleCode": "partner_admin" },
    { "dashboard": "insights", "roleCode": "partner_user" }
  ],
  "iat": 1709000000,
  "exp": 1709000900
}
```

### Token Refresh Flow (Rotation)

```
Client                              Server
  │                                    │
  │─── POST /api/auth/refresh ────────>│
  │    { refreshToken: "gis_..." }    │
  │                                    │  1. Load all non-revoked tokens from DB
  │                                    │  2. bcrypt.compare each until match found
  │                                    │  3. Check not expired
  │                                    │  4. Revoke the matched token (set revokedAt)
  │                                    │  5. Verify user still active
  │                                    │  6. Reload user roles
  │                                    │  7. Generate new access + refresh token pair
  │                                    │  8. Hash & store new refresh token
  │<── 200 ───────────────────────────│
  │    { accessToken, refreshToken }   │
```

### Logout Flows

```
POST /api/auth/logout       → Revoke single refresh token (current device)
POST /api/auth/logout-all   → Revoke ALL refresh tokens for user (all devices)
```

---

## 6. Authorization (Guards) Flow

Guards execute in this order on every request:

```
Request
  │
  ▼
┌──────────────────────────────────────────────┐
│  1. JwtAuthGuard (GLOBAL - APP_GUARD)        │
│     - Validates JWT, attaches req.user       │
│     - @Public() routes skip this guard       │
│     - Failure → 401 Unauthorized             │
└──────────────┬───────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────┐
│  2. RolesGuard (GLOBAL - APP_GUARD)          │
│     - Checks @Roles('system_admin', ...)     │
│     - System users bypass this check         │
│     - No @Roles decorator → allow all        │
│     - Failure → 403 Forbidden                │
└──────────────┬───────────────────────────────┘
               │
               ▼
          Controller
```

### Decorator Usage Examples

```typescript
// Public endpoint - no auth needed
@Public()
@Post('login')
async login() { ... }

// Requires authentication only (any logged-in user)
@Get('me')
async getProfile() { ... }

// Requires specific role
@Roles('system_admin', 'partner_admin')
@Get('admin/stats')
async getStats() { ... }

// Extract current user from JWT
@Get('profile')
async getProfile(@CurrentUser() user: AuthenticatedUser) {
  return user.userId;
}
```

---

## 7. Module Architecture

```
AppModule
  ├── ConfigModule (global)
  ├── TypeOrmModule (global)
  ├── AuditModule (global) ──────────────── Injectable AuditService
  ├── AuthModule
  │     ├── imports: JwtModule, PassportModule
  │     ├── JwtStrategy (Passport)
  │     ├── AuthController: login, refresh, logout, logout-all, me
  │     └── AuthService: credentials, tokens, profile
  ├── UsersModule
  │     ├── UsersController: CRUD + changePassword
  │     └── UsersService
  ├── PartnersModule
  │     ├── PartnersController: CRUD
  │     └── PartnersService
  ├── RolesModule
  │     ├── RolesController: CRUD + assign/revoke
  │     └── RolesService
  ├── AgentsModule
  │     ├── AgentsController: CRUD
  │     └── AgentsService
  ├── ApiKeysModule
  │     ├── ApiKeysController: create, list, revoke
  │     └── ApiKeysService
  └── TestReportsModule
        ├── TestReportsController: list, findOne, latest HTML, index HTML, delete
        └── TestReportsService: DB queries + HTML report generation
```

### Global Providers (APP_GUARD)

```typescript
providers: [
  { provide: APP_GUARD, useClass: JwtAuthGuard },   // runs on ALL routes
  { provide: APP_GUARD, useClass: RolesGuard },      // runs on ALL routes
]
```

---

## 8. API Endpoints

### Auth (`/api/auth`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/auth/login` | Public | Login with username/password |
| POST | `/auth/refresh` | Public | Refresh access token |
| POST | `/auth/logout` | Bearer | Revoke current refresh token |
| POST | `/auth/logout-all` | Bearer | Revoke all refresh tokens |
| GET | `/auth/me` | Bearer | Get current user profile + roles |

### Users (`/api/users`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/users` | Bearer | Create a new user |
| GET | `/users` | Bearer | List users (filter: partnerId, isActive) |
| GET | `/users/:userId` | Bearer | Get user by ID with roles |
| PATCH | `/users/:userId` | Bearer | Update user details |
| PATCH | `/users/:userId/password` | Bearer | Change user password |
| DELETE | `/users/:userId` | Bearer | Soft delete user |

### Partners (`/api/partners`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/partners` | Bearer | Create a new partner |
| GET | `/partners` | Bearer | List partners |
| GET | `/partners/:partnerId` | Bearer | Get partner details |
| PATCH | `/partners/:partnerId` | Bearer | Update partner (including allowed_dashboards) |
| DELETE | `/partners/:partnerId` | Bearer | Soft delete partner |

### Roles (`/api/roles`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/roles` | Bearer | Create a custom role |
| GET | `/roles` | Bearer | List roles (filter: dashboard) |
| GET | `/roles/:roleId` | Bearer | Get role details |
| PATCH | `/roles/:roleId` | Bearer | Update role (including permissions JSONB) |
| POST | `/roles/assign` | Bearer | Assign a role to a user |
| POST | `/roles/revoke` | Bearer | Revoke a role from a user |
| GET | `/roles/user/:userId` | Bearer | Get all roles for a user |

### Agents (`/api/agents`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/agents` | Bearer | Create a field agent |
| GET | `/agents` | Bearer | List agents (filter: partnerId, status) |
| GET | `/agents/:agentId` | Bearer | Get agent by ID |
| PATCH | `/agents/:agentId` | Bearer | Update agent |
| DELETE | `/agents/:agentId` | Bearer | Delete agent |

### API Keys (`/api/api-keys`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api-keys` | Bearer | Create API key (returns raw key once) |
| GET | `/api-keys` | Bearer | List API keys (filter: partnerId) |
| DELETE | `/api-keys/:apiKeyId` | Bearer | Revoke an API key |

### Test Reports (`/api/test-reports`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/test-reports` | Public | List all test report runs |
| GET | `/test-reports/latest/html` | Public | Latest report as HTML |
| GET | `/test-reports/index` | Public | Index page listing all runs |
| GET | `/test-reports/:runId` | Public | Get a specific run with results |
| GET | `/test-reports/:runId/html` | Public | Specific report as HTML |
| DELETE | `/test-reports/:runId` | Bearer | Delete a test report run |

### Health (`/api`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | Public | Health check |
| GET | `/test` | Public | Health check |

---

## 9. Dashboards & Roles

Roles are seeded per dashboard. Permissions JSONB is currently empty `{}` — will be populated once business defines the key-value pairs.

### Crop Monitoring Portal — 5 roles
| Role | Description |
|------|-------------|
| **system_admin** | All partner data, complete management |
| **executive_user** | Overview dashboard, aggregate stats |
| **partner_admin** | Create accounts, manage agents, full access within partner |
| **general_user** | Farm list, individual farm indices, no exec overview |
| **agri_expert** | Cross-partner anomaly review, advisory |

### Insights Dashboard — 4 roles
| Role | Description |
|------|-------------|
| **system_admin** | Access all layers, all regions |
| **partner_user** | Scoped to enabled layers only |
| **analyst_user** | Read-only cross-layer comparison |
| **external_stakeholder** | Limited view for govt/insurer |

### Cane Monitoring Dashboard — 4 roles
| Role | Description |
|------|-------------|
| **super_admin** | All mills combined |
| **mill_admin** | Mill-specific data |
| **unit_admin** | Unit-specific data |
| **multi_mill_admin** | 2+ mills combined |

### Admin Dashboard — 2 roles
| Role | Description |
|------|-------------|
| **super_admin** | Full platform control |
| **executive** | Read-only overview and reporting |

### Field Survey Dashboard — 3 roles
| Role | Description |
|------|-------------|
| **system_admin** | Add/remove agents, assign regions |
| **qa_user** | Approve/reject, request re-visits |
| **qa_supervisor** | Oversee multiple QA users |

### Field Survey App — 2 roles
| Role | Description |
|------|-------------|
| **surveyor** | Field data collection, boundary marking |
| **field_executive** | Supervisory field role with expanded access |

**Total: 20 roles across 6 dashboards**

---

## 10. SQL Setup Strategy

### Execution Order (Fresh Database)

```
1. sql/001_auth_schema.sql       ← Creates all 10 tables
2. sql/003_seed_data.sql         ← Seeds 20 roles across 6 dashboards
3. Create first admin user       ← Via SQL or API after startup
```

---

## 11. Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Roles are per-dashboard | `dashboard` varchar column | A user can be `partner_admin` on Crop Monitoring but `partner_user` on Insights |
| Permissions as JSONB | On roles table | Simpler than separate permissions/role_permissions tables. Populated when business defines them |
| Partner dashboard access | `allowed_dashboards` TEXT array on partners | Simpler than a separate partner_dashboards table |
| No dashboards table | Dashboard is just a string | No need for a separate registry table |
| Agents optionally have users | `agents.user_id` nullable | Some agents only use phone-based auth, others need web login |
| System users have no partner | `users.partner_id` nullable | BKK internal staff work cross-partner |
| Refresh tokens in DB | Hashed, revocable | Enables logout-everywhere, token rotation, device tracking |
| `synchronize: false` | Manual SQL migrations | Always use explicit SQL for schema changes |
| Soft deletes on users/partners | `deleted_at` column | Preserve audit trail, allow restoration |
| Audit logs | Append-only | Every admin action is tracked |
| API keys hashed | Only prefix stored | Raw key shown once at creation, never again |

---

## 12. Setup & Deployment

### Environment Variables

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=1282
DB_NAME=GIS_auth
PORT=3001
JWT_SECRET=<your-secret-key>
JWT_ACCESS_TTL=900         # 15 minutes in seconds
JWT_REFRESH_TTL=604800     # 7 days in seconds
BCRYPT_ROUNDS=12
```

### Deploy Steps

1. **Create the database** and run SQL scripts:
   ```bash
   psql -h <host> -U postgres -c "CREATE DATABASE gis_auth;"
   psql -h <host> -U postgres -d gis_auth -f sql/001_auth_schema.sql
   psql -h <host> -U postgres -d gis_auth -f sql/003_seed_data.sql
   ```

2. **Build & start application:**
   ```bash
   npm run build
   npm run start:prod
   ```

3. **Verify:**
   - Swagger docs: `http://<host>:3001/api/docs`
   - Health check: `GET http://<host>:3001/api`
   - Login: `POST http://<host>:3001/api/auth/login`

### Creating the First System Admin

After setup, if no system admin exists:

```sql
-- Create via SQL (password must be bcrypt-hashed)
INSERT INTO users (username, password_hash, full_name, is_system_user, is_active)
VALUES ('superadmin', '$2b$12$<hashed_password>', 'Super Admin', TRUE, TRUE);

-- Assign super_admin role on admin dashboard
INSERT INTO user_roles (user_id, role_id)
SELECT u.user_id, r.role_id
FROM users u, roles r
WHERE u.username = 'superadmin'
  AND r.dashboard = 'admin'
  AND r.code = 'super_admin';
```

Or use the `/api/users` endpoint after logging in with any existing admin account.
