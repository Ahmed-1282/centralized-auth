# Old vs New Schema Comparison

## Quick Summary

| Metric | Old (GIS_v2) | New (GIS Auth) |
|--------|-------------|----------------|
| Auth tables | 5 (messy) | 14 (purpose-built) |
| Permission model | 30 hardcoded booleans | Dynamic RBAC with 60+ granular permissions |
| Dashboard awareness | Single `dashboard_access` varchar | 6 registered dashboards with scoped roles |
| Password storage | Plaintext | bcrypt hashed |
| Token management | Raw `refresh_token` on agent row | Hashed, rotatable, per-device, expirable |
| Multi-tenancy | Partial (varchar FKs, no isolation) | Full (UUID FKs, partner-scoped everything) |
| Audit trail | `portal_activity_tracking` (page views only) | Full `audit_logs` (every admin action) |
| Soft delete | Only on `partner_login` | On `users` and `partners` |
| API key support | None | Full (hashed, scoped, rate-limited) |

---

## Table-by-Table Comparison

---

### 1. Partners

#### OLD: `partners`

```sql
CREATE TABLE public.partners (
    name            varchar NULL,
    username        varchar NULL,        -- auth on the partner table??
    password        varchar NULL,        -- plaintext password
    role            varchar NULL,        -- single flat role string
    partner_id      uuid NOT NULL,
    address         varchar NULL,
    contact_no      varchar NULL,
    email           varchar NULL,
    credits         int8 NULL,
    message_credits int8 DEFAULT 0 NULL
);
```

**Problems:**
- `username` and `password` directly on the partner table — mixing auth with org data
- `password` stored as plaintext varchar
- `role` is a single varchar string — no multi-role support
- No `is_active` flag — can't deactivate without deleting
- No `created_at`, `updated_at`, `deleted_at` — no audit trail, no soft delete
- No `settings` — can't store partner-specific configuration
- `credits` is nullable — should default to 0

#### NEW: `partners`

```sql
CREATE TABLE partners (
    partner_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(255) NOT NULL,
    slug            VARCHAR(100) UNIQUE,
    address         TEXT,
    contact_no      VARCHAR(50),
    email           VARCHAR(255),
    logo_url        VARCHAR(500),
    credits         BIGINT DEFAULT 0,
    message_credits BIGINT DEFAULT 0,
    settings        JSONB DEFAULT '{}',
    is_active       BOOLEAN DEFAULT TRUE,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW(),
    deleted_at      TIMESTAMPTZ
);
```

**Improvements:**
- No auth fields — clean separation of concerns
- `slug` for white-label URLs
- `logo_url` for branding
- `settings` JSONB for flexible partner config
- `is_active` flag for deactivation without deletion
- Full timestamp tracking (`created_at`, `updated_at`, `deleted_at`)
- Soft delete support
- `NOT NULL` on required fields, proper defaults

---

### 2. Users / Login

#### OLD: `partner_login`

```sql
CREATE TABLE public.partner_login (
    name            varchar NULL,
    username        varchar NULL,        -- no UNIQUE constraint!
    password        varchar NULL,        -- plaintext
    permission      varchar NULL,        -- flat string like 'admin' or 'partner'
    aoi             varchar NULL,        -- area of interest mixed in
    crops           varchar NULL,        -- crop data mixed in
    partner_id      varchar NULL,        -- VARCHAR not UUID!
    id              uuid NULL,           -- nullable PK??
    insights_role   text NULL,           -- separate role for insights only
    permission_id   uuid NULL,           -- FK to boolean permission table
    partner_uuid    uuid NULL,           -- duplicate of partner_id as UUID
    deleted_at      timestamp NULL
);
-- No PRIMARY KEY constraint on the table!
```

**Problems:**
- **No primary key constraint** — `id` is nullable, not a PK
- `username` has **no UNIQUE constraint** — duplicate usernames possible
- `password` is **plaintext** — critical security vulnerability
- `permission` is a flat varchar (`'admin'`, `'partner'`) — no granularity
- `insights_role` is a **separate column** for a different dashboard — doesn't scale to 6 dashboards
- `partner_id` is `varchar` but `partner_uuid` is `uuid` — **two columns for the same thing**
- `aoi` and `crops` are **business data mixed into the auth table**
- No `email`, `phone`, `avatar_url`, `is_active`, `is_system_user`
- No `last_login_at` tracking
- No `created_at`, `updated_at`

#### NEW: `users`

```sql
CREATE TABLE users (
    user_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username        VARCHAR(100) UNIQUE NOT NULL,
    email           VARCHAR(255) UNIQUE,
    password_hash   VARCHAR(255) NOT NULL,
    full_name       VARCHAR(255),
    phone           VARCHAR(50),
    avatar_url      VARCHAR(500),
    is_active       BOOLEAN DEFAULT TRUE,
    is_system_user  BOOLEAN DEFAULT FALSE,
    partner_id      UUID REFERENCES partners(partner_id),
    last_login_at   TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW(),
    deleted_at      TIMESTAMPTZ
);
CREATE INDEX idx_users_partner ON users(partner_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_username ON users(username) WHERE deleted_at IS NULL;
```

**Improvements:**
- Proper UUID primary key with `NOT NULL`
- `username` is `UNIQUE NOT NULL` — no duplicates
- `password_hash` — bcrypt hashed, never plaintext
- No business data mixed in — auth is auth
- `is_system_user` flag for BKK internal staff (replaces the `partner_uuid IS NULL` hack)
- `is_active` for deactivation
- `last_login_at` tracking
- Proper FK to `partners` with UUID type
- Partial indexes for performance
- Soft delete with `deleted_at`

---

### 3. Permissions

#### OLD: `partner_login_permissions`

```sql
CREATE TABLE public.partner_login_permissions (
    permission_id           uuid NOT NULL,
    view_credits            bool DEFAULT false,
    add_agents              bool DEFAULT false,
    add_partner_account     bool DEFAULT false,
    view_agents_and_farms   bool DEFAULT true,
    view_alerts             bool DEFAULT true,
    send_alerts             bool DEFAULT false,
    view_overall_stats      bool DEFAULT true,
    view_farm_details       bool DEFAULT true,
    send_sms                bool DEFAULT false,
    send_vms                bool DEFAULT false,
    view_sms_logs           bool DEFAULT false,
    insights                bool DEFAULT false,
    reset_password          bool DEFAULT false,
    bkkappfarms             bool DEFAULT false,
    bkkfieldsurvey          bool DEFAULT false,
    weather                 bool DEFAULT false,
    weatherstations         bool DEFAULT false,
    agribankcropcalendar    bool DEFAULT false,
    agroecologicalzones     bool DEFAULT false,
    dikhansugarcane         bool DEFAULT false,
    digitizedfields         bool DEFAULT false,
    punjabsoil              bool DEFAULT false,
    fieldidentifier         bool DEFAULT false,
    kpsoilpois              bool DEFAULT false,
    kpsoilgrids             bool DEFAULT false,
    kpsoilraster            bool DEFAULT false,
    classificationrabi24    bool DEFAULT false,
    rawclassification       bool DEFAULT false,
    fcv_tobacco_2024        bool DEFAULT false,
    crop_update             bool DEFAULT false,
    bank_portal             bool DEFAULT false,
    agent_stats             bool DEFAULT false,
    agent_assignment        bool DEFAULT false,
    dashboard_access        varchar NULL,
    bank_permissions        jsonb NULL
);
```

**Problems:**
- **30+ hardcoded boolean columns** — every new feature requires `ALTER TABLE ADD COLUMN`
- No concept of **which dashboard** a permission belongs to
- No grouping by module — flat list of booleans
- Column names like `bkkappfarms`, `dikhansugarcane`, `classificationrabi24` are **feature-specific and dated**
- `dashboard_access` is a single varchar — can't express multi-dashboard access
- `bank_permissions` as JSONB is inconsistent with the boolean pattern
- Each user gets **one** permission row — can't have different permissions per dashboard
- Can't create custom roles — every user is manually configured
- No audit of who granted what permission or when

#### NEW: 5-table RBAC system

```sql
-- Dynamic permission registry
CREATE TABLE permissions (
    permission_id   UUID PRIMARY KEY,
    dashboard_id    UUID REFERENCES dashboards(dashboard_id),
    code            VARCHAR(100) NOT NULL,    -- 'farms.view'
    name            VARCHAR(255) NOT NULL,
    module          VARCHAR(100),             -- 'farm_management'
    UNIQUE(dashboard_id, code)
);

-- Named roles with bundled permissions
CREATE TABLE roles (
    role_id         UUID PRIMARY KEY,
    dashboard_id    UUID REFERENCES dashboards(dashboard_id),
    code            VARCHAR(50) NOT NULL,     -- 'partner_admin'
    name            VARCHAR(255) NOT NULL,
    is_system_role  BOOLEAN DEFAULT TRUE,
    UNIQUE(dashboard_id, code)
);

-- Role-to-permission mapping (M:N)
CREATE TABLE role_permissions (
    role_id         UUID REFERENCES roles(role_id),
    permission_id   UUID REFERENCES permissions(permission_id),
    PRIMARY KEY (role_id, permission_id)
);

-- User-to-role assignment
CREATE TABLE user_roles (
    user_id     UUID REFERENCES users(user_id),
    role_id     UUID REFERENCES roles(role_id),
    granted_by  UUID REFERENCES users(user_id),
    granted_at  TIMESTAMPTZ DEFAULT NOW(),
    revoked_at  TIMESTAMPTZ,
    UNIQUE(user_id, role_id)
);

-- Direct overrides (grant or deny)
CREATE TABLE user_permissions (
    user_id         UUID REFERENCES users(user_id),
    permission_id   UUID REFERENCES permissions(permission_id),
    is_granted      BOOLEAN NOT NULL,     -- true=grant, false=deny
    granted_by      UUID REFERENCES users(user_id),
    UNIQUE(user_id, permission_id)
);
```

**Improvements:**
- **Dynamic** — add new permissions with INSERT, not ALTER TABLE
- **Dashboard-scoped** — each permission belongs to a specific dashboard
- **Module grouping** — permissions organized by module (`farm_management`, `analytics`, etc.)
- **Role-based** — assign a role and the user gets all its permissions automatically
- **Per-dashboard roles** — a user can be `partner_admin` on Crop Monitoring but `partner_user` on Insights
- **Direct overrides** — grant or deny specific permissions beyond the role (without creating a custom role)
- **Audit trail** — `granted_by`, `granted_at`, `revoked_at` on every assignment
- **Soft revoke** — revoke a role without deleting the history
- **60+ permissions** seeded across 6 dashboards vs 30 hardcoded booleans

#### Side-by-Side: Adding a New Feature Permission

| Step | Old Way | New Way |
|------|---------|---------|
| 1 | `ALTER TABLE partner_login_permissions ADD COLUMN new_feature bool DEFAULT false;` | `INSERT INTO permissions (dashboard_id, code, name, module) VALUES (...);` |
| 2 | Deploy code that reads the new column | Deploy code that checks `@Permissions('new_feature.view')` |
| 3 | Manually UPDATE each user's permission row | Assign to a role: `INSERT INTO role_permissions ...` — all users with that role get it instantly |

---

### 4. Agents

#### OLD: Two separate tables

**`partner_agents`** (partner's field agents):
```sql
CREATE TABLE public.partner_agents (
    partner_id  varchar NOT NULL,     -- VARCHAR not UUID!
    msisdn      varchar NOT NULL,
    subscriber  varchar NULL,
    agent_id    uuid NULL,            -- nullable, not even PK
    create_dt   timestamp NULL,
    end_dt      timestamp NULL,
    status      varchar(20) DEFAULT 'active',
    PRIMARY KEY (partner_id, msisdn)
);
```

**`agents`** (mobile app agents — separate auth system):
```sql
CREATE TABLE public.agents (
    msisdn          varchar NOT NULL,  -- phone number as PK
    name            varchar NULL,
    email           text NULL,
    key             varchar(8),        -- 8-char random key
    address         varchar(200) NULL,
    is_reset_password bool DEFAULT true,
    device_info     json NULL,
    password        varchar(255) NULL, -- plaintext password
    refresh_token   text NULL,         -- raw unhashed token!
    PRIMARY KEY (msisdn)
);
```

**Problems:**
- **Two separate agent tables** with different structures and no FK between them
- `partner_agents.partner_id` is `varchar` — not a proper UUID FK
- `partner_agents.agent_id` is nullable — not a reliable identifier
- `agents` table has its own **separate auth system** (password + refresh_token)
- `agents.password` is **plaintext**
- `agents.refresh_token` is stored **unhashed** — if DB is compromised, all tokens leak
- `agents.key` is an 8-char random string — weak authentication
- No link between `partner_agents` and `agents` — same person could exist in both with no connection
- `msisdn` as primary key — what if an agent changes phone numbers?

#### NEW: `agents`

```sql
CREATE TABLE agents (
    agent_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID UNIQUE REFERENCES users(user_id),   -- optional login
    partner_id      UUID NOT NULL REFERENCES partners(partner_id),
    msisdn          VARCHAR(20) NOT NULL,
    subscriber_name VARCHAR(255),
    home_location   JSONB,
    status          VARCHAR(20) DEFAULT 'active'
                    CHECK (status IN ('active','inactive','suspended')),
    created_at      TIMESTAMPTZ DEFAULT NOW(),
    updated_at      TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(partner_id, msisdn)
);
```

**Improvements:**
- **Single table** — one source of truth for all agents
- Proper UUID primary key — not phone number
- `user_id` optional FK to `users` — agents who need web login get a user account, others don't
- **Centralized auth** — no more separate password/refresh_token on the agent. Login goes through the `users` table + JWT system
- Proper UUID FK to `partners`
- `home_location` as JSONB for structured geo data
- `CHECK` constraint on status values
- `UNIQUE(partner_id, msisdn)` — prevents duplicate agents per partner
- Timestamps for tracking

---

### 5. Dashboard Access Control

#### OLD: Nothing (or a single varchar)

```sql
-- In partner_login_permissions:
dashboard_access varchar NULL   -- a single string?? for 6 dashboards??

-- In partner_login:
insights_role text NULL         -- hardcoded column per dashboard
```

**Problems:**
- `dashboard_access` is a single varchar — unclear format, can't express multiple dashboards
- `insights_role` is a **separate column** for a single dashboard — adding cane_monitoring would need another column
- No way to control which dashboards a partner organization can access
- No way to enable/disable features per partner per dashboard

#### NEW: Two dedicated tables

```sql
-- Which dashboards a partner can access
CREATE TABLE partner_dashboards (
    partner_id      UUID REFERENCES partners(partner_id),
    dashboard_id    UUID REFERENCES dashboards(dashboard_id),
    is_enabled      BOOLEAN DEFAULT TRUE,
    enabled_at      TIMESTAMPTZ DEFAULT NOW(),
    enabled_by      UUID REFERENCES users(user_id),
    config          JSONB DEFAULT '{}',
    PRIMARY KEY (partner_id, dashboard_id)
);

-- Feature-level toggles per partner
CREATE TABLE partner_feature_toggles (
    partner_id      UUID REFERENCES partners(partner_id),
    permission_id   UUID REFERENCES permissions(permission_id),
    is_enabled      BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (partner_id, permission_id)
);
```

**Improvements:**
- **Explicit dashboard registry** — 6 dashboards as rows, not columns
- Per-partner dashboard access with `is_enabled` toggle
- `config` JSONB for dashboard-specific partner settings
- `enabled_by` audit trail — who enabled this dashboard for this partner
- **Feature toggles** — disable specific features for a partner even if their users' roles include them
- Adding a 7th dashboard = `INSERT INTO dashboards` — no schema changes

---

### 6. Token Management

#### OLD: Raw tokens scattered across tables

```sql
-- In agents table:
refresh_token text NULL          -- stored as PLAINTEXT

-- In password_reset_tokens:
CREATE TABLE password_reset_tokens (
    id          uuid NOT NULL,
    email       varchar(255) NULL,
    token       varchar(255) NULL,   -- raw token, not hashed
    is_used     bool DEFAULT false,
    create_dt   timestamp NULL,
    update_dt   timestamp NULL
);
```

**Problems:**
- `agents.refresh_token` stored **unhashed** — DB breach = all tokens compromised
- One refresh token per agent — no multi-device support
- No expiration on agent refresh tokens
- No revocation mechanism (can't "logout all devices")
- `password_reset_tokens.token` also unhashed
- No IP address or device tracking

#### NEW: `refresh_tokens`

```sql
CREATE TABLE refresh_tokens (
    token_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    token_hash      VARCHAR(255) NOT NULL,   -- bcrypt hashed
    device_info     JSONB,
    ip_address      VARCHAR(45),
    expires_at      TIMESTAMPTZ NOT NULL,
    revoked_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_refresh_tokens_user ON refresh_tokens(user_id) WHERE revoked_at IS NULL;
```

**Improvements:**
- Tokens are **bcrypt hashed** — DB breach doesn't compromise sessions
- **Multi-device support** — one row per device/session
- **Expiration** — `expires_at` with 7-day TTL
- **Revocation** — `revoked_at` for logout, plus logout-all-devices
- **Token rotation** — on refresh, old token is revoked and new one issued
- **Device tracking** — `device_info` JSONB and `ip_address`
- Partial index for fast lookup of active tokens

---

### 7. Audit Trail

#### OLD: `portal_activity_tracking`

```sql
CREATE TABLE public.portal_activity_tracking (
    portal_url  text NULL,
    partner_id  uuid NOT NULL,
    start_time  timestamp DEFAULT CURRENT_TIMESTAMP,
    end_time    timestamp DEFAULT CURRENT_TIMESTAMP,
    location    text NULL
);
-- No primary key!
```

**Problems:**
- **No primary key** — can't reference or deduplicate rows
- Only tracks page views (`portal_url`, `start_time`, `end_time`)
- No user-level tracking — only partner-level
- No action tracking — who created/deleted/modified what?
- No details — what changed?
- No IP address or user agent

#### NEW: `audit_logs`

```sql
CREATE TABLE audit_logs (
    log_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID REFERENCES users(user_id),
    action          VARCHAR(100) NOT NULL,   -- 'user.create', 'role.assign', 'partner.delete'
    resource_type   VARCHAR(100),            -- 'user', 'partner', 'role'
    resource_id     VARCHAR(255),
    details         JSONB,                   -- what changed
    ip_address      VARCHAR(45),
    user_agent      TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created ON audit_logs(created_at);
CREATE INDEX idx_audit_logs_action ON audit_logs(action);
```

**Improvements:**
- Proper UUID primary key
- **User-level tracking** — who did it
- **Action-based** — login, create, update, delete, assign, revoke
- **Resource tracking** — what type and ID was affected
- **Details JSONB** — full payload of what changed
- **IP + User Agent** — forensic information
- **Indexed** — fast queries by user, action, or time range
- **Append-only** — immutable audit trail

---

### 8. What's Completely New (No Old Equivalent)

| New Table | Purpose | Why it didn't exist before |
|-----------|---------|---------------------------|
| `dashboards` | Registry of 6 dashboards | Old system had no concept of dashboards as entities |
| `roles` | Named permission bundles per dashboard | Old system used flat varchar `permission` field |
| `role_permissions` | M:N role-to-permission mapping | Old system had no roles at all |
| `user_roles` | User-to-role assignment with audit | Old system had `permission` as a column on `partner_login` |
| `user_permissions` | Direct grant/deny overrides | Old system had no override mechanism |
| `partner_dashboards` | Which dashboards a partner can access | Old system had a single `dashboard_access` varchar |
| `partner_feature_toggles` | Feature-level control per partner | Old system had no feature toggle support |
| `api_keys` | Third-party API access | Old system had no API key management |

---

## The Scaling Problem

Here's why the old approach fundamentally doesn't work as the platform grows:

```
OLD: Adding "Carbon Tracking" feature to Insights dashboard

  1. ALTER TABLE partner_login_permissions ADD COLUMN carbon_tracking bool DEFAULT false;
  2. UPDATE partner_login_permissions SET carbon_tracking = true WHERE permission_id IN (...);
  3. Deploy new code that reads the carbon_tracking column
  4. Repeat for every new feature forever

  After 2 years: 80+ boolean columns, ALTER TABLE on a table with millions of rows

NEW: Adding "Carbon Tracking" feature to Insights dashboard

  1. INSERT INTO permissions (dashboard_id, code, name, module)
     VALUES ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'),
             'carbon.track', 'Track Carbon', 'analytics', 'Track carbon footprint');
  2. INSERT INTO role_permissions (role_id, permission_id)  -- assign to analyst role
     SELECT r.role_id, p.permission_id
     FROM roles r JOIN permissions p ON ...
     WHERE r.code = 'analyst_user';
  3. Deploy new code with @Permissions('carbon.track')

  Schema never changes. All done with INSERT.
```

---

## Summary

| Aspect | Old | New |
|--------|-----|-----|
| Add a permission | ALTER TABLE + deploy | INSERT row |
| Add a dashboard | Add column to partner_login | INSERT row |
| Give user access to 3 dashboards | Set 3 separate varchar/bool columns | Assign 3 roles (one per dashboard) |
| Remove one feature from a partner | Manual UPDATE on permission booleans | Toggle one row in partner_feature_toggles |
| Know who granted a permission | Impossible | `granted_by` + `granted_at` on user_roles |
| Revoke access and keep history | DELETE the row | Set `revoked_at` timestamp |
| Support a new client app | Add more boolean columns | Register new dashboard + roles + permissions |
| Password security | Plaintext | bcrypt with configurable rounds |
| Token security | Raw text in DB | bcrypt hashed, rotated, expirable |
| Deactivate without deleting | Not possible (only `deleted_at` on partner_login) | `is_active` flag + soft delete on users and partners |
