# Centralized Auth

A production-ready **Centralized Authentication & Authorization** backend. Manages users, partners, roles, permissions, and API keys across multiple dashboards with full multi-tenant RBAC.

Built with **NestJS 11** + **TypeORM** + **PostgreSQL**.

---

## Architecture

<p align="center">
  <img src="docs/architecture.png" alt="Architecture Diagram" width="500" />
</p>

**Request Flow:**

1. **Client** sends a request (web dashboard, mobile app, or third-party API)
2. **Global Layer** applies CORS and request validation
3. **Guard Chain** runs in order:
   - **JWT Guard** — verifies the Bearer token is valid (authentication)
   - **Roles Guard** — checks the user has the required role for the endpoint
   - **Dashboard Guard** — verifies the user's partner has access to this dashboard
   - **Permissions Guard** — checks fine-grained permissions (role-based + direct overrides + partner toggles)
4. **Controller** receives the validated request and routes to the correct module
5. **Service Layer** executes business logic
6. **TypeORM** handles database queries
7. **PostgreSQL** stores all data across 16 tables
8. **Response** returns standardized JSON: `{ status, message, data }`

---

## Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | NestJS 11.x |
| ORM | TypeORM 0.3.x |
| Database | PostgreSQL |
| Auth | JWT (access + refresh tokens) |
| Password Hashing | bcrypt |
| API Docs | Swagger (auto-generated) |
| Testing | Jest + Supertest (E2E pipeline) |

---

## Database Schema (16 Tables)

```
partners              users                 dashboards
├── partner_id (PK)   ├── user_id (PK)      ├── dashboard_id (PK)
├── name              ├── username (UNIQUE)  ├── code (UNIQUE)
├── slug (UNIQUE)     ├── email (UNIQUE)     ├── name
├── settings (JSONB)  ├── password_hash      └── is_active
└── is_active         ├── is_system_user
                      └── partner_id (FK)

roles                 permissions           role_permissions
├── role_id (PK)      ├── permission_id (PK) ├── role_id (PK, FK)
├── dashboard_id (FK) ├── dashboard_id (FK)  └── permission_id (PK, FK)
├── code              ├── code
├── name              ├── name
└── is_system_role    └── module

user_roles            user_permissions      partner_dashboards
├── user_role_id (PK) ├── user_permission_id ├── partner_id (PK, FK)
├── user_id (FK)      ├── user_id (FK)       ├── dashboard_id (PK, FK)
├── role_id (FK)      ├── permission_id (FK) ├── is_enabled
├── granted_by (FK)   ├── is_granted         └── config (JSONB)
├── granted_at        └── granted_by (FK)
└── revoked_at

partner_feature_toggles   refresh_tokens        agents
├── partner_id (PK, FK)   ├── token_id (PK)     ├── agent_id (PK)
├── permission_id (PK,FK) ├── user_id (FK)      ├── user_id (FK, optional)
└── is_enabled            ├── token_hash        ├── partner_id (FK)
                          ├── expires_at        ├── msisdn
                          └── revoked_at        └── status

api_keys              audit_logs            test_report_runs / test_report_results
├── api_key_id (PK)   ├── log_id (PK)       (E2E test reporting tables)
├── partner_id (FK)   ├── user_id (FK)
├── key_hash          ├── action
├── scopes (TEXT[])   ├── resource_type
└── is_active         └── details (JSONB)
```

**Key design decisions:**
- **Dashboard-scoped RBAC** — roles and permissions are tied to specific dashboards
- **3-layer permission resolution** — role permissions → direct user overrides → partner feature toggles
- **Partner dashboard access** — `partner_dashboards` controls which dashboards each partner can use
- **One role per dashboard per user** — enforced by application logic via `user_roles`
- **System users** have `is_system_user = true` and nullable `partner_id` — they bypass partner-level restrictions
- **Audit trail** on role assignments (`granted_by`, `granted_at`, `revoked_at`)

---

## 6 Dashboards

| # | Dashboard | Purpose |
|---|-----------|---------|
| 1 | **Operations Dashboard** | Real-time operational monitoring and resource management |
| 2 | **Analytics Dashboard** | Cross-platform analytics, reporting, and insights |
| 3 | **Supply Chain Dashboard** | End-to-end supply chain tracking and management |
| 4 | **Admin Dashboard** | Master control panel for all dashboards and users |
| 5 | **Field Operations Dashboard** | Agent management, QA, payroll, data pipeline |
| 6 | **Mobile App** | Mobile data collection, tasks, offline sync |

Each dashboard has its own set of roles and permissions. A partner's `partner_dashboards` entries control which dashboards their users can access. 20 roles and 61 permissions are seeded across all 6 dashboards.

---

## API Endpoints

| Module | Endpoints | Description |
|--------|-----------|-------------|
| **Auth** | `POST /api/auth/login`, `refresh`, `logout`, `logout-all`, `GET /me` | JWT login, token rotation, session management |
| **Partners** | CRUD `/api/partners` + dashboard access toggle | Organization management with dashboard access control |
| **Users** | CRUD `/api/users` + password change | User management with partner scoping |
| **Roles** | CRUD `/api/roles` + `assign`, `revoke`, `GET /user/:id` | Role management with permission mapping |
| **Permissions** | CRUD `/api/permissions` + user overrides + partner toggles | Permission registry, direct grants/denies, feature toggles |
| **Agents** | CRUD `/api/agents` | Field agent management |
| **API Keys** | `POST`, `GET`, `DELETE` `/api/api-keys` | Third-party API access with hashed keys |
| **Audit** | `GET /api/audit` | Audit log queries (who did what, when) |
| **Test Reports** | `GET /api/test-reports/latest/html` | Browser-viewable E2E test reports |

All endpoints return: `{ status: "success" | "error", message: "...", data: {...} }`

Swagger docs available at: `http://localhost:3000/api/docs`

---

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Create database and run schema
psql -U postgres -c "CREATE DATABASE centralized_auth;"
psql -U postgres -d centralized_auth -f sql/001_auth_schema.sql
psql -U postgres -d centralized_auth -f sql/003_seed_data.sql

# 3. Create superadmin user
psql -U postgres -d centralized_auth -c "
INSERT INTO users (username, email, password_hash, full_name, is_active, is_system_user)
VALUES ('superadmin', 'superadmin@system.local',
        '\$2b\$12\$lZ17W0XKGvPcyFW7LSK2teFp4nyL9atJ86swRjcfg9h/lrYreM/gy',
        'Super Admin', true, true);
"
# Password: Password@123

# 4. Configure environment
# Copy .env.example to .env.local and set DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME

# 5. Start the server
npm run start:dev
```

Server runs at `http://localhost:3000` (or the PORT defined in your `.env`)

---

## Testing

```bash
# Run the E2E test pipeline (65 tests across 11 modules)
npm run dev:test
```

Tests run sequentially, create test data, validate all endpoints, save an HTML report to the database, then clean up all test data automatically.

View test reports at: `http://localhost:3000/api/test-reports/latest/html`

---

## Project Structure

```
src/
├── common/
│   ├── decorators/          # @Public(), @Roles(), @Permissions(), @Dashboard(), @CurrentUser()
│   ├── filters/             # AllExceptionsFilter
│   ├── guards/              # JwtAuthGuard, RolesGuard, DashboardGuard, PermissionsGuard
│   ├── interceptors/        # Response transformer
│   └── interfaces/          # JWT payload types
├── entities/                # TypeORM entities (16 tables)
├── modules/
│   ├── auth/                # Login, refresh, logout, JWT strategy
│   ├── partners/            # Partner CRUD + dashboard access
│   ├── users/               # User CRUD + password management
│   ├── roles/               # Role CRUD + permission mapping + assign/revoke
│   ├── permissions/         # Permission CRUD + user overrides + partner toggles
│   ├── agents/              # Field agent CRUD
│   ├── api-keys/            # API key management
│   ├── audit/               # Audit log queries
│   └── test-reports/        # E2E test report viewer
├── app.module.ts            # Root module
└── main.ts                  # Bootstrap + Swagger setup

sql/
├── 001_auth_schema.sql      # CREATE TABLE (16 tables)
└── 003_seed_data.sql        # Seed dashboards + 20 roles + 61 permissions

docs/
├── architecture.png         # Architecture diagram
├── Explanation.md           # Manager-friendly schema explanation
├── Process.md               # Complete technical documentation
└── Testing.md               # E2E testing guide

test/
└── api-pipeline.e2e-spec.ts # 65 E2E tests across 11 modules
```

---

## How It Works

### Creating a Partner + User + Agent

```
1. POST /api/partners
   → Create org (name, slug, settings)

2. POST /api/partners/:id/dashboards
   → Enable dashboards for the partner (e.g. operations, analytics)

3. POST /api/users
   → Create user with partnerId from step 1

4. POST /api/roles/assign
   → Assign a role (e.g. operations partner_admin) to the user

5. POST /api/agents (optional)
   → Create field agent under the partner
```

### Authentication Flow

```
Login (username + password)
  → Validate credentials (bcrypt compare)
  → Generate JWT access token (15 min) + refresh token (7 days)
  → Store refresh token hash in DB
  → Return both tokens

Protected Request
  → JWT Guard extracts + verifies access token
  → Roles Guard checks user's roles match endpoint requirements
  → Dashboard Guard checks partner has access to this dashboard
  → Permissions Guard resolves effective permissions (roles + overrides + toggles)
  → Request proceeds to controller

Token Refresh
  → Send refresh token to /api/auth/refresh
  → Old token revoked, new pair issued (rotation)
```

### Permission Resolution (3 Layers)

```
Layer 1: Role Permissions (base)
   "partner_admin" role gives: resources.view, resources.manage, metrics.view, ...

Layer 2: Direct User Overrides
   Admin denied "resources.export" for this user specifically
   Result: resources.view, resources.manage, metrics.view (export removed)

Layer 3: Partner Feature Toggles
   Partner doesn't have "resources.manage" feature enabled
   Final result: resources.view, metrics.view only
```

---

## Documentation

| Document | Description |
|----------|-------------|
| [Explanation.md](docs/Explanation.md) | Database schema explained in simple words (for managers) |
| [Process.md](docs/Process.md) | Complete technical documentation |
| [Testing.md](docs/Testing.md) | E2E testing guide with all 65 test cases |
