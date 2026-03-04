# GIS Auth - Database Schema Explanation

A complete, manager-friendly explanation of the entire database schema.

---

## Overview

The system has **15 tables** organized into **4 layers**. Think of it like a building — each layer has a purpose.

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

### `dashboards` — The Applications

Each dashboard represents a **separate application/module** in the GIS system.

| Column | Purpose |
|--------|---------|
| `code` | Short unique identifier like `crop_monitoring` |
| `name` | Human-readable name like "Crop Monitoring Dashboard" |
| `is_active` | Toggle the entire dashboard on/off |

Examples: Crop Monitoring, Weather, VRA Maps, Indices, Agents, Crops

**Why?** — The GIS platform has multiple dashboards. We need to control **which partner gets access to which dashboard** and define roles/permissions per dashboard.

---

### `roles` — Job Titles / Access Levels

Roles are like **job titles** within a dashboard. For example, in the Crop Monitoring dashboard:

- `admin` — can do everything
- `field_manager` — can manage fields and view data
- `viewer` — can only view data

Each role belongs to a **specific dashboard**. A role in Crop Monitoring is separate from a role in Weather.

**Why?** — Instead of assigning 50 individual permissions to each user, we group permissions into roles. Assign one role = user gets all its permissions. Much easier to manage.

#### System Roles vs Custom Roles (`is_system_role`)

This flag distinguishes between **two types of roles**:

**System Roles** (`is_system_role = true`):
- **Built-in, predefined roles** that come with the platform out of the box
- Examples: `admin`, `viewer`, `field_manager`
- Created by **the developers** during database seeding
- Should **not be deleted or modified** by partner admins — they are the foundation

**Custom Roles** (`is_system_role = false`):
- Roles created **by partner admins** themselves to fit their specific needs
- Example: A partner might create a "Regional Supervisor" role with a custom mix of permissions
- These **can be edited or deleted** by the partner who created them

Think of it like a phone:
- **System roles** = the apps that come **pre-installed** (Camera, Phone, Settings). You can't delete them.
- **Custom roles** = the apps **you download** yourself (WhatsApp, Instagram). You created them, you can modify or delete them.

---

### `permissions` — Individual Actions

Permissions are the **smallest unit of access control**. Each one represents one specific action:

- `crop_monitoring.view` — can view crop data
- `vra.manage` — can create/edit VRA maps
- `weather.read` — can read weather data

Each permission belongs to a dashboard and has a `module` field for grouping.

**Why?** — Fine-grained control. Some users might need a custom set of permissions that doesn't match any standard role.

---

### `role_permissions` — Which role has which permissions?

A **junction/bridge table** connecting roles to permissions (many-to-many).

Example: The "field_manager" role might include permissions: `crop_monitoring.view`, `crop_monitoring.edit`, `indices.read`

**Why?** — One role can have many permissions, and one permission can belong to many roles. This table makes that relationship possible.

---

### `user_roles` — Which user has which role?

Assigns roles to users, with a full **audit trail**:

| Column | Purpose |
|--------|---------|
| `granted_by` | Which admin assigned this role |
| `granted_at` | When it was assigned |
| `revoked_at` | When/if it was revoked (without deleting the record) |

**Why?** — We can track **who gave whom access and when** — critical for security audits and compliance.

---

### `user_permissions` — Direct Permission Overrides

Sometimes a user needs one extra permission (or needs one taken away) without changing their whole role:

| Column | Purpose |
|--------|---------|
| `is_granted` | `true` = grant extra permission, `false` = **deny** a permission (even if their role includes it) |
| `granted_by` | Which admin made this change |

**Why?** — Maximum flexibility. Example: A "viewer" who also needs to export reports — give them the export permission directly without creating a new role.

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
| `is_active` | Enable/disable the entire partner |
| `deleted_at` | Soft delete — keep history, allow recovery |

**Why?** — The platform serves multiple organizations. Each needs its own users, dashboard access, and credit balance.

---

### `partner_dashboards` — Which company gets which dashboards?

Controls which dashboards each partner company can access:

| Column | Purpose |
|--------|---------|
| `is_enabled` | Toggle access on/off |
| `enabled_by` | Which admin enabled it |
| `config` | JSON settings like `{max_users: 50, max_farms: 100}` — partner-specific limits |

**Why?** — Not every partner pays for every dashboard. Partner A might only have Crop Monitoring, while Partner B has Crop Monitoring + Weather + VRA.

---

### `partner_feature_toggles` — Fine-grained feature control per partner

Even within a dashboard they have access to, we can **turn specific features on/off** per partner.

**Why?** — Example: Partner A pays for VRA Maps but not the "advanced analytics" feature within it. We disable that specific permission for them.

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
                    └──────┬───────┘
                           │ has many
              ┌────────────┼────────────┐
              │            │            │
        ┌─────▼────┐ ┌────▼─────┐ ┌───▼──────┐
        │  USERS   │ │  AGENTS  │ │ API KEYS │
        │(People)  │ │ (Field)  │ │(Machines)│
        └─────┬────┘ └──────────┘ └──────────┘
              │ assigned
      ┌───────┼────────┐
      │                │
 ┌────▼─────┐   ┌─────▼──────────┐
 │  ROLES   │   │  DIRECT PERMS  │
 │(Grouped) │   │  (Overrides)   │
 └────┬─────┘   └────────────────┘
      │ contains
 ┌────▼────────┐
 │ PERMISSIONS │  ← Smallest unit of access
 └─────────────┘
      │ scoped to
 ┌────▼──────┐
 │DASHBOARDS │  ← Crop Monitoring, Weather, VRA...
 └───────────┘
```

---

## Key Design Decisions

| Decision | Why |
|----------|-----|
| **UUIDs** for all IDs | Globally unique, safe for distributed systems, no sequential guessing |
| **Soft deletes** (users, partners) | Keep history, enable recovery, maintain referential integrity |
| **JSONB columns** for flexible data | Settings, device info, locations — avoids creating dozens of extra tables |
| **Two-level permissions** (roles + direct) | Roles for easy management, direct permissions for exceptions |
| **Dashboard-scoped roles/permissions** | Each app has its own set — no confusion between dashboards |
| **Audit trail on assignments** | `granted_by`, `granted_at`, `revoked_at` — full accountability |
| **Encrypted tokens & keys** | Passwords, refresh tokens, API keys all hashed — security best practice |
| **Rate limiting on API keys** | Prevents abuse, protects system resources |
| **Credits system on partners** | Built-in billing/usage tracking per company |

---

## Summary

This is a **Role-Based Access Control (RBAC)** system with **multi-tenant partner management**, **field agent tracking**, and **comprehensive audit logging** — all standard patterns for enterprise GIS platforms.
