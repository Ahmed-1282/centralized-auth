# GIS Auth - Complete Authentication & Authorization System

## Table of Contents

1. [Overview](#1-overview)
2. [Architecture](#2-architecture)
3. [Database Schema](#3-database-schema)
4. [Entity Relationship Diagram](#4-entity-relationship-diagram)
5. [Authentication Flow](#5-authentication-flow)
6. [Authorization (Guards) Flow](#6-authorization-guards-flow)
7. [Permission Resolution Logic](#7-permission-resolution-logic)
8. [Module Architecture](#8-module-architecture)
9. [API Endpoints](#9-api-endpoints)
10. [Dashboards, Roles & Permissions Matrix](#10-dashboards-roles--permissions-matrix)
11. [SQL Migration & Seed Strategy](#11-sql-migration--seed-strategy)
12. [Key Design Decisions](#12-key-design-decisions)
13. [Setup & Deployment](#13-setup--deployment)

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

This system provides **centralized authentication** (JWT-based) and **multi-tenant, dashboard-scoped RBAC** (Role-Based Access Control) across all 6 dashboards.

### Core Concepts

- **Partner** = An organization/company (e.g., an agricultural company). Partners have users and field agents.
- **User** = A person who logs into the platform. Belongs to a partner (or is a system user with no partner).
- **Agent** = A field agent who collects data on the ground. Belongs to a partner, optionally linked to a user account.
- **Role** = A named set of permissions, scoped to a specific dashboard. A user can hold different roles on different dashboards.
- **Permission** = A granular feature-level action (e.g., `farms.view`, `anomalies.manage`), scoped to a dashboard.
- **System User** = Internal BKK staff / super admins with no partner. They bypass partner-level restrictions.

---

## 2. Architecture

### Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | NestJS 11.x |
| ORM | TypeORM 0.3.28 |
| Database | PostgreSQL (GIS_v2) |
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
│   │   ├── permissions.decorator.ts         # @Permissions('farms.view')
│   │   ├── dashboard.decorator.ts           # @Dashboard('crop_monitoring')
│   │   └── current-user.decorator.ts        # @CurrentUser() param decorator
│   ├── guards/
│   │   ├── jwt-auth.guard.ts                # Global JWT validation
│   │   ├── roles.guard.ts                   # Role checking per dashboard
│   │   ├── permissions.guard.ts             # Permission checking with resolution
│   │   └── dashboard.guard.ts               # Partner dashboard access check
│   ├── filters/                             # Exception filters
│   ├── interceptors/                        # Response transform interceptor
│   └── interfaces/
│       └── jwt-payload.interface.ts         # JwtPayload, AuthenticatedUser classes
├── entities/
│   ├── partner.entity.ts
│   ├── dashboard.entity.ts
│   ├── role.entity.ts
│   ├── permission.entity.ts
│   ├── user.entity.ts
│   ├── user-role.entity.ts
│   ├── user-permission.entity.ts
│   ├── partner-dashboard.entity.ts
│   ├── partner-feature-toggle.entity.ts
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
│   ├── partners/                            # Partner CRUD + dashboard access
│   ├── roles/                               # Role management + user assignment
│   ├── permissions/                         # Permission management + toggles
│   ├── agents/                              # Agent CRUD
│   ├── api-keys/                            # API key provisioning
│   ├── audit/                               # Audit logging service (global)
│   └── test-reports/                        # E2E test report storage & HTML views
└── sql/
    ├── 001_auth_schema.sql                  # CREATE TABLE (16 tables)
    ├── 002_migrate_existing_data.sql        # Legacy data migration
    └── 003_seed_data.sql                    # Dashboards, roles, permissions seed
```

---

## 3. Database Schema

### 16 Tables Overview

```
┌──────────────────────┐     ┌──────────────────┐     ┌──────────────────────┐
│      partners        │     │    dashboards     │     │     audit_logs       │
│──────────────────────│     │──────────────────│     │──────────────────────│
│ partner_id (PK)      │     │ dashboard_id (PK)│     │ log_id (PK)          │
│ name                 │     │ code (UNIQUE)    │     │ user_id (FK)         │
│ slug (UNIQUE)        │     │ name             │     │ action               │
│ address              │     │ description      │     │ resource_type        │
│ contact_no           │     │ is_active        │     │ resource_id          │
│ email                │     └──────────────────┘     │ details (JSONB)      │
│ logo_url             │                               │ ip_address           │
│ credits              │                               │ user_agent           │
│ message_credits      │                               │ created_at           │
│ settings (JSONB)     │                               └──────────────────────┘
│ is_active            │
│ created_at           │
│ updated_at           │
│ deleted_at           │
└──────────────────────┘

┌──────────────────────┐     ┌──────────────────────┐
│       roles          │     │     permissions      │
│──────────────────────│     │──────────────────────│
│ role_id (PK)         │     │ permission_id (PK)   │
│ dashboard_id (FK)    │     │ dashboard_id (FK)    │
│ code                 │     │ code                 │
│ name                 │     │ name                 │
│ description          │     │ description          │
│ is_system_role       │     │ module               │
└──────────────────────┘     └──────────────────────┘
         │                              │
         │    ┌──────────────────────┐  │
         └───>│  role_permissions    │<─┘
              │──────────────────────│
              │ role_id (PK, FK)     │
              │ permission_id (PK,FK)│
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

┌──────────────────────┐     ┌──────────────────────┐     ┌──────────────────────┐
│     user_roles       │     │   user_permissions   │     │   refresh_tokens     │
│──────────────────────│     │──────────────────────│     │──────────────────────│
│ user_role_id (PK)    │     │ user_permission_id   │     │ token_id (PK)        │
│ user_id (FK)         │     │   (PK)               │     │ user_id (FK)         │
│ role_id (FK)         │     │ user_id (FK)         │     │ token_hash           │
│ granted_by (FK)      │     │ permission_id (FK)   │     │ device_info (JSONB)  │
│ granted_at           │     │ is_granted           │     │ ip_address           │
│ revoked_at           │     │ granted_by (FK)      │     │ expires_at           │
└──────────────────────┘     │ granted_at           │     │ revoked_at           │
                              └──────────────────────┘     │ created_at           │
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

┌──────────────────────────┐     ┌──────────────────────────────┐
│    partner_dashboards    │     │   partner_feature_toggles    │
│──────────────────────────│     │──────────────────────────────│
│ partner_id (PK, FK)      │     │ partner_id (PK, FK)          │
│ dashboard_id (PK, FK)    │     │ permission_id (PK, FK)       │
│ is_enabled               │     │ is_enabled                   │
│ enabled_at               │     └──────────────────────────────┘
│ enabled_by (FK)          │
│ config (JSONB)           │
└──────────────────────────┘

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

| Table | Columns | Purpose |
|-------|---------|---------|
| `partners` | 12 cols + timestamps + soft delete | Partner organizations with settings, credits, branding |
| `dashboards` | 4 cols | Registry of the 6 dashboards |
| `roles` | 6 cols | Named roles scoped to a dashboard (e.g., `partner_admin` on `crop_monitoring`) |
| `permissions` | 6 cols | Granular feature permissions scoped to a dashboard (e.g., `farms.view`) |
| `role_permissions` | 2 cols (composite PK) | M:N mapping of which permissions a role grants |
| `users` | 11 cols + timestamps + soft delete | Central user accounts with bcrypt passwords, partner link |
| `user_roles` | 6 cols | User-to-role assignment with `granted_by`, `granted_at`, `revoked_at` audit trail |
| `user_permissions` | 6 cols | Direct permission overrides — grant or deny beyond the role |
| `refresh_tokens` | 7 cols + created_at | Bcrypt-hashed refresh tokens with device info, IP, expiration, revocation |
| `agents` | 7 cols + timestamps | Field agents with optional 1:1 user account link, JSONB home location |
| `partner_dashboards` | 5 cols + composite PK | Which dashboards a partner can access, with config and audit |
| `partner_feature_toggles` | 3 cols (composite PK) | Feature-level on/off per partner per permission |
| `api_keys` | 11 cols + created_at | Third-party API access with hashed keys, scopes, rate limits |
| `audit_logs` | 8 cols + created_at | Append-only action trail — user, action, resource, details, IP |
| `test_report_runs` | 6 cols + created_at | E2E test run summaries — pass/fail counts, duration, JSONB module breakdown |
| `test_report_results` | 12 cols | Individual test outcomes per run — endpoint, method, status, duration, error |

---

## 4. Entity Relationship Diagram

```
                    ┌────────────┐
                    │ dashboards │
                    └─────┬──────┘
            ┌─────────────┼─────────────┐
            v             v             v
       ┌────────┐   ┌────────────┐  ┌────────────────────┐
       │ roles  │   │permissions │  │ partner_dashboards  │
       └───┬────┘   └─────┬─────┘  └────────┬───────────┘
           │              │                  │
           └──────┬───────┘                  │
                  v                          │
          ┌────────────────┐                 │
          │role_permissions│                 │
          └────────────────┘                 │
                                             │
    ┌──────────┐                    ┌────────────────┐
    │  users   │────────────────────│  partners   │
    └────┬─────┘                    └───────┬────────┘
         │                                  │
    ┌────┼─────────────┐                    │
    v    v             v                    v
┌──────────┐ ┌────────────────┐    ┌───────────────────────┐
│user_roles│ │user_permissions│    │partner_feature_toggles│
└──────────┘ └────────────────┘    └───────────────────────┘
    │
    v
┌──────────────┐     ┌──────────┐     ┌───────────┐
│refresh_tokens│     │  agents  │     │ api_keys  │
└──────────────┘     └──────────┘     └───────────┘
                         │
                    (optional 1:1)
                         │
                    ┌────┘
                    v
                 ┌──────┐
                 │users │
                 └──────┘
```

**Key Relationships:**
- `users.partner_id → partners.partner_id` (nullable - NULL for system users)
- `roles.dashboard_id → dashboards.dashboard_id` (roles are scoped per dashboard)
- `permissions.dashboard_id → dashboards.dashboard_id` (permissions are scoped per dashboard)
- `user_roles` links users to roles (with `granted_by`, `revoked_at` for audit trail)
- `user_permissions` provides direct overrides (grant = true, deny = false)
- `partner_dashboards` controls which dashboards a partner can access
- `partner_feature_toggles` controls which individual features are enabled per partner
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
  │                                    │  4. Load user_roles with role.dashboard info
  │                                    │  5. Build JWT payload with roles array
  │                                    │  6. Sign access token (15 min TTL)
  │                                    │  7. Generate random refresh token
  │                                    │  8. Hash refresh token, store in DB with device/IP info
  │                                    │  9. Update user.lastLoginAt
  │                                    │ 10. Log audit: 'user.login'
  │<── 200 ───────────────────────────│
  │    {                               │
  │      tokens: {                     │
  │        accessToken: "eyJ...",      │
  │        refreshToken: "abc123..."   │
  │      },                            │
  │      user: {                       │
  │        userId, username, email,    │
  │        fullName, isSystemUser,     │
  │        partnerId, partnerName,     │
  │        roles: [                    │
  │          { dashboardCode, roleCode,│
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
    { "dashboardCode": "crop_monitoring", "roleCode": "partner_admin" },
    { "dashboardCode": "insights", "roleCode": "partner_user" }
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
  │    { refreshToken: "abc123..." }   │
  │                                    │  1. Load all non-revoked tokens from DB
  │                                    │  2. bcrypt.compare each until match found
  │                                    │  3. Check not expired
  │                                    │  4. Revoke the matched token (set revokedAt)
  │                                    │  5. Verify user still active
  │                                    │  6. Reload user roles (may have changed)
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

### Request Authentication

```
Client                              Server
  │                                    │
  │─── GET /api/farms ────────────────>│
  │    Authorization: Bearer eyJ...    │
  │                                    │  JwtAuthGuard:
  │                                    │    1. Extract token from Authorization header
  │                                    │    2. Verify JWT signature + expiration
  │                                    │    3. Attach decoded payload as req.user
  │                                    │
  │                                    │  If route has @Public() → skip guard
  │                                    │  If no token / expired → 401 Unauthorized
  │<── data ──────────────────────────│
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
│     - Optionally scoped by @Dashboard()      │
│     - System users bypass this check         │
│     - No @Roles decorator → allow all        │
│     - Failure → 403 Forbidden                │
└──────────────┬───────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────┐
│  3. DashboardGuard (per-route)               │
│     - Checks @Dashboard('crop_monitoring')   │
│     - Verifies partner_dashboards entry      │
│     - System users bypass this check         │
│     - No @Dashboard decorator → allow all    │
│     - Failure → 403 Forbidden                │
└──────────────┬───────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────┐
│  4. PermissionsGuard (per-route)             │
│     - Checks @Permissions('farms.view', ...) │
│     - Full resolution (see Section 7)        │
│     - System users bypass this check         │
│     - No @Permissions decorator → allow all  │
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

// Requires role + dashboard scope
@Dashboard('crop_monitoring')
@Roles('partner_admin')
@Get('farms')
async getFarms() { ... }

// Requires specific permission on a dashboard
@Dashboard('crop_monitoring')
@Permissions('farms.view')
@Get('farms')
async getFarms() { ... }

// Extract current user from JWT
@Get('profile')
async getProfile(@CurrentUser() user: AuthenticatedUser) {
  return user.userId;
}
```

---

## 7. Permission Resolution Logic

When `@Permissions('farms.view', 'farms.manage')` is applied to a route:

```
Step 1: Get user's active roles
        → SELECT * FROM user_roles WHERE user_id = ? AND revoked_at IS NULL

Step 2: Collect permissions from roles (via role_permissions join)
        → For each active role, gather all permission codes
        → If @Dashboard specified, only include roles matching that dashboard

        Result: Set<string> rolePermissions = { 'farms.view', 'indices.view', ... }

Step 3: Get direct user permission overrides
        → SELECT * FROM user_permissions WHERE user_id = ?

        For each override:
          - if is_granted = TRUE  → ADD to granted set
          - if is_granted = FALSE → REMOVE from granted set

        Result: Set<string> effectivePermissions

Step 4: Filter by partner feature toggles (if user has a partner)
        → SELECT * FROM partner_feature_toggles WHERE partner_id = ?
        → If partner has ANY toggles defined:
            only keep permissions where toggle.is_enabled = TRUE
            (removes permissions the partner hasn't been granted)

        Result: Set<string> finalPermissions

Step 5: Check all required permissions are present
        → requiredPermissions.every(p => finalPermissions.has(p))
        → If any missing → 403 Forbidden
```

### Visual Formula

```
effective_permissions =
    (permissions from user's active roles)
    ∪ (direct grants where is_granted = true)
    \ (direct denies where is_granted = false)
    ∩ (partner feature toggles where is_enabled = true)    ← only if partner has toggles
```

### Example Scenario

```
User: john (partner: AgroCorp)
  Active Roles:
    - crop_monitoring / partner_admin → grants: farms.view, farms.manage, indices.view, ...
    - insights / partner_user        → grants: layers.view, data.export

  Direct Overrides:
    - farms.export: is_granted = TRUE   (added - not in role but directly granted)
    - indices.view: is_granted = FALSE  (removed - explicitly denied despite role)

  Partner Feature Toggles (AgroCorp):
    - farms.view: enabled
    - farms.manage: enabled
    - indices.view: enabled      ← but john has a direct deny, so still blocked
    - farms.export: NOT in toggles... if partner has any toggles, this gets blocked

  Final on crop_monitoring:
    { farms.view, farms.manage }
```

---

## 8. Module Architecture

### Module Dependency Graph

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
  │     ├── PartnersController: CRUD + toggleDashboardAccess
  │     └── PartnersService
  ├── RolesModule
  │     ├── RolesController: CRUD + setPermissions + assign/revoke
  │     └── RolesService
  ├── PermissionsModule
  │     ├── PermissionsController: CRUD + user overrides + feature toggles
  │     └── PermissionsService
  ├── AgentsModule
  │     ├── AgentsController: CRUD
  │     └── AgentsService
  ├── ApiKeysModule
  │     ├── ApiKeysController: create, list, revoke
  │     └── ApiKeysService
  └── TestReportsModule
        ├── TestReportsController: list, findOne, latest HTML, index HTML, run HTML, delete
        └── TestReportsService: DB queries + HTML report generation
```

### Global Providers (APP_GUARD)

Registered in `AppModule.providers`:

```typescript
providers: [
  { provide: APP_GUARD, useClass: JwtAuthGuard },   // runs on ALL routes
  { provide: APP_GUARD, useClass: RolesGuard },      // runs on ALL routes
]
```

---

## 9. API Endpoints

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
| GET | `/partners/:partnerId` | Bearer | Get partner with dashboard access |
| PATCH | `/partners/:partnerId` | Bearer | Update partner |
| POST | `/partners/:partnerId/dashboards` | Bearer | Toggle dashboard access |
| GET | `/partners/:partnerId/dashboards` | Bearer | Get partner's dashboard access |
| DELETE | `/partners/:partnerId` | Bearer | Soft delete partner |

### Roles (`/api/roles`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/roles` | Bearer | Create a custom role |
| GET | `/roles` | Bearer | List roles (filter: dashboardCode) |
| GET | `/roles/:roleId` | Bearer | Get role with its permissions |
| PATCH | `/roles/:roleId/permissions` | Bearer | Set permissions for a role |
| POST | `/roles/assign` | Bearer | Assign a role to a user |
| POST | `/roles/revoke` | Bearer | Revoke a role from a user |
| GET | `/roles/user/:userId` | Bearer | Get all roles for a user |

### Permissions (`/api/permissions`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/permissions` | Bearer | Create a permission |
| GET | `/permissions` | Bearer | List permissions (filter: dashboardCode, module) |
| POST | `/permissions/user` | Bearer | Set direct user permission (grant/deny) |
| DELETE | `/permissions/user/:userId/:permissionId` | Bearer | Remove direct override |
| GET | `/permissions/user/:userId` | Bearer | Get user's direct permissions |
| POST | `/permissions/partner-toggle` | Bearer | Set partner feature toggle |
| GET | `/permissions/partner-toggle/:partnerId` | Bearer | Get partner's feature toggles |

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
| POST | `/api-keys/:apiKeyId/revoke` | Bearer | Revoke an API key |

### Test Reports (`/api/test-reports`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/test-reports` | Public | List all test report runs (JSON) |
| GET | `/test-reports/latest/html` | Public | Latest test report as styled HTML page |
| GET | `/test-reports/index` | Public | Index page listing all runs as HTML |
| GET | `/test-reports/:runId` | Public | Get a specific run with all results (JSON) |
| GET | `/test-reports/:runId/html` | Public | Specific test report as styled HTML page |
| DELETE | `/test-reports/:runId` | Bearer | Delete a test report run |

### Health (`/api`)

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/` | Public | Health check |
| GET | `/health` | Public | Health check |

---

## 10. Dashboards, Roles & Permissions Matrix

### Crop Monitoring Portal

| Role | Permissions |
|------|-------------|
| **system_admin** | ALL permissions |
| **executive_user** | farms.view, indices.view, anomalies.view, weather.view, overview.view, reports.view, reports.export, disease_risk.view, yield.view |
| **partner_admin** | ALL except overview.view |
| **general_user** | farms.view, indices.view, anomalies.view, weather.view, reports.view, disease_risk.view, yield.view |
| **agri_expert** | farms.view, indices.view, anomalies.view, anomalies.manage, advisory.view, advisory.create, disease_risk.view, weather.view |

Full permissions list: `farms.view`, `farms.manage`, `farms.export`, `indices.view`, `anomalies.view`, `anomalies.manage`, `agents.view`, `agents.manage`, `advisory.view`, `advisory.create`, `reports.view`, `reports.export`, `weather.view`, `overview.view`, `disease_risk.view`, `yield.view`

### Insights Dashboard

| Role | Permissions |
|------|-------------|
| **system_admin** | ALL permissions |
| **partner_user** | layers.view, classification.view, data.export |
| **analyst_user** | layers.view, classification.view, benchmarking.view, carbon.view, trends.view, data.export |
| **external_stakeholder** | layers.view, benchmarking.view |

Full permissions: `layers.view`, `layers.manage`, `classification.view`, `benchmarking.view`, `carbon.view`, `trends.view`, `data.export`

### Cane Monitoring Dashboard

| Role | Permissions |
|------|-------------|
| **super_admin** | ALL permissions |
| **mill_admin** | ALL permissions |
| **unit_admin** | mills.view, harvest.view, harvest.manage, farmers.view, farmers.manage, classification.view, ratoon.view, yield.view |
| **multi_mill_admin** | ALL permissions |

Full permissions: `mills.view`, `mills.manage`, `harvest.view`, `harvest.manage`, `farmers.view`, `farmers.manage`, `classification.view`, `ratoon.view`, `yield.view`

### Admin Dashboard

| Role | Permissions |
|------|-------------|
| **super_admin** | ALL permissions |
| **executive** | All `*.view` + platform.analytics |

Full permissions: `partners.view`, `partners.manage`, `users.view`, `users.manage`, `roles.view`, `roles.manage`, `layers.manage`, `api_keys.view`, `api_keys.manage`, `billing.view`, `billing.manage`, `audit.view`, `white_label.manage`, `platform.analytics`

### Field Survey Dashboard

| Role | Permissions |
|------|-------------|
| **system_admin** | ALL permissions |
| **qa_user** | surveys.view, surveys.qa, agents.view, performance.view |
| **qa_supervisor** | surveys.view, surveys.qa, surveys.supervise, agents.view, payroll.view, data.export, performance.view |

Full permissions: `agents.view`, `agents.manage`, `surveys.view`, `surveys.qa`, `surveys.supervise`, `payroll.view`, `payroll.manage`, `data.export`, `performance.view`

### Field Survey App

| Role | Permissions |
|------|-------------|
| **surveyor** | ALL permissions |
| **field_executive** | ALL permissions |

Full permissions: `surveys.submit`, `boundaries.mark`, `photos.upload`, `tasks.view`, `tasks.execute`, `farmers.onboard`

---

## 11. SQL Setup Strategy

### Execution Order (Fresh Database)

```
1. sql/001_auth_schema.sql       ← Creates all 16 tables
2. sql/003_seed_data.sql         ← Seeds dashboards, roles, permissions, role_permissions
3. Create first admin user       ← Via SQL or the /api/auth endpoint after startup
```

### Notes

- This schema is designed for a **fresh database** — no legacy table dependencies
- All `partner_id` columns use proper `UUID` type with FK constraints
- The `partners` table is clean — no auth fields mixed in (unlike the old GIS_v2 `partners` which had `username`/`password`/`role` on it)
- Passwords are always bcrypt-hashed — no plaintext storage

---

## 12. Key Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Roles are per-dashboard | Yes | A user can be `partner_admin` on Crop Monitoring but only `partner_user` on Insights |
| Permissions belong to a dashboard | Yes | `farms.view` is a crop_monitoring permission, `layers.view` is an insights permission |
| Partner feature toggles | Separate table | Partners can be blocked from specific features even if their users' roles include them |
| Agents optionally have users | `agents.user_id` nullable | Some agents only use phone-based auth on mobile, others need web login |
| System users have no partner | `users.partner_id` nullable | BKK internal staff and agri-experts work cross-partner |
| Refresh tokens in DB | Hashed, revocable | Enables logout-everywhere, token rotation, device tracking |
| `synchronize: false` | Manual SQL migrations | Always use explicit SQL for schema changes |
| Soft deletes on users/partners | `deleted_at` column | Preserve audit trail, allow restoration |
| Direct permission overrides | Grant + deny | Enables fine-grained exceptions without creating single-use roles |
| Fresh `partners` table | Clean design | No auth fields mixed in, proper UUID PKs, JSONB settings |
| Audit logs | Append-only | Every admin action (create, update, delete, assign, revoke) is tracked |
| API keys hashed | Only prefix stored | Like GitHub tokens - the raw key is shown once at creation, never again |
| Explicit `type` on nullable `@Column` | Always specify `type` when `nullable: true` | TypeScript's `emitDecoratorMetadata` emits `Object` for union types (`string \| null`), which PostgreSQL doesn't support. Always use e.g. `@Column({ type: 'uuid', nullable: true })` or `@Column({ type: 'varchar', length: 255, nullable: true })` |

---

## 13. Setup & Deployment

### Environment Variables

```env
# Database (existing)
DB_HOST=192.168.12.148
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=***
DB_NAME=GIS_v2

# JWT
JWT_SECRET=<your-secret-key>
JWT_ACCESS_TTL=900         # 15 minutes in seconds
JWT_REFRESH_TTL=604800     # 7 days in seconds

# Bcrypt
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

4. **Verify:**
   - Swagger docs: `http://<host>:3000/api/docs`
   - Health check: `GET http://<host>:3000/api/health`
   - Login: `POST http://<host>:3000/api/auth/login`

### Creating the First System Admin

After migration, if no system admin exists:

```sql
-- Create via SQL (password must be bcrypt-hashed)
INSERT INTO users (username, password_hash, full_name, is_system_user, is_active)
VALUES ('superadmin', '$2b$12$<hashed_password>', 'Super Admin', TRUE, TRUE);

-- Assign super_admin role on admin dashboard
INSERT INTO user_roles (user_id, role_id)
SELECT u.user_id, r.role_id
FROM users u, roles r
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE u.username = 'superadmin'
  AND d.code = 'admin'
  AND r.code = 'super_admin';
```

Or use the `/api/users` endpoint after logging in with any existing admin account.
