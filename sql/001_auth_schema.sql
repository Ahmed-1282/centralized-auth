-- ============================================================
-- Centralized Auth - Database Schema (Fresh DB)
-- ============================================================

BEGIN;

-- 1. Partners
CREATE TABLE IF NOT EXISTS partners (
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

-- 2. Dashboards
CREATE TABLE IF NOT EXISTS dashboards (
    dashboard_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code            VARCHAR(50) UNIQUE NOT NULL,
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    is_active       BOOLEAN DEFAULT TRUE
);

-- 3. Roles (per-dashboard)
CREATE TABLE IF NOT EXISTS roles (
    role_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dashboard_id    UUID NOT NULL REFERENCES dashboards(dashboard_id),
    code            VARCHAR(50) NOT NULL,
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    is_system_role  BOOLEAN DEFAULT TRUE,
    UNIQUE(dashboard_id, code)
);

-- 4. Permissions (granular, per-dashboard)
CREATE TABLE IF NOT EXISTS permissions (
    permission_id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dashboard_id    UUID NOT NULL REFERENCES dashboards(dashboard_id),
    code            VARCHAR(100) NOT NULL,
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    module          VARCHAR(100),
    UNIQUE(dashboard_id, code)
);

-- 5. Role-Permission mapping
CREATE TABLE IF NOT EXISTS role_permissions (
    role_id         UUID NOT NULL REFERENCES roles(role_id) ON DELETE CASCADE,
    permission_id   UUID NOT NULL REFERENCES permissions(permission_id) ON DELETE CASCADE,
    PRIMARY KEY (role_id, permission_id)
);

-- 6. Users (replaces partner_login)
CREATE TABLE IF NOT EXISTS users (
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
CREATE INDEX IF NOT EXISTS idx_users_partner ON users(partner_id) WHERE deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username) WHERE deleted_at IS NULL;

-- 7. User-Role assignments (dashboard-scoped via role.dashboard_id)
CREATE TABLE IF NOT EXISTS user_roles (
    user_role_id    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    role_id         UUID NOT NULL REFERENCES roles(role_id) ON DELETE CASCADE,
    granted_by      UUID REFERENCES users(user_id),
    granted_at      TIMESTAMPTZ DEFAULT NOW(),
    revoked_at      TIMESTAMPTZ,
    UNIQUE(user_id, role_id)
);
CREATE INDEX IF NOT EXISTS idx_user_roles_user ON user_roles(user_id) WHERE revoked_at IS NULL;

-- 8. User-Permission overrides (direct grant/deny)
CREATE TABLE IF NOT EXISTS user_permissions (
    user_permission_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    permission_id   UUID NOT NULL REFERENCES permissions(permission_id) ON DELETE CASCADE,
    is_granted      BOOLEAN NOT NULL DEFAULT TRUE,
    granted_by      UUID REFERENCES users(user_id),
    granted_at      TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, permission_id)
);

-- 9. Partner-Dashboard access
CREATE TABLE IF NOT EXISTS partner_dashboards (
    partner_id      UUID NOT NULL REFERENCES partners(partner_id) ON DELETE CASCADE,
    dashboard_id    UUID NOT NULL REFERENCES dashboards(dashboard_id) ON DELETE CASCADE,
    is_enabled      BOOLEAN DEFAULT TRUE,
    enabled_at      TIMESTAMPTZ DEFAULT NOW(),
    enabled_by      UUID REFERENCES users(user_id),
    config          JSONB DEFAULT '{}',
    PRIMARY KEY (partner_id, dashboard_id)
);

-- 10. Partner feature toggles
CREATE TABLE IF NOT EXISTS partner_feature_toggles (
    partner_id      UUID NOT NULL REFERENCES partners(partner_id) ON DELETE CASCADE,
    permission_id   UUID NOT NULL REFERENCES permissions(permission_id) ON DELETE CASCADE,
    is_enabled      BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (partner_id, permission_id)
);

-- 11. Agents (enhanced, replaces partner_agents)
CREATE TABLE IF NOT EXISTS agents (
    agent_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID UNIQUE REFERENCES users(user_id),
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
CREATE INDEX IF NOT EXISTS idx_agents_partner ON agents(partner_id);

-- 12. Refresh tokens
CREATE TABLE IF NOT EXISTS refresh_tokens (
    token_id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    token_hash      VARCHAR(255) NOT NULL,
    device_info     JSONB,
    ip_address      VARCHAR(45),
    expires_at      TIMESTAMPTZ NOT NULL,
    revoked_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user ON refresh_tokens(user_id) WHERE revoked_at IS NULL;

-- 13. API keys
CREATE TABLE IF NOT EXISTS api_keys (
    api_key_id      UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    partner_id      UUID NOT NULL REFERENCES partners(partner_id),
    key_hash        VARCHAR(255) NOT NULL,
    key_prefix      VARCHAR(12) NOT NULL,
    name            VARCHAR(255) NOT NULL,
    scopes          TEXT[] DEFAULT '{}',
    rate_limit      INT DEFAULT 60,
    is_active       BOOLEAN DEFAULT TRUE,
    expires_at      TIMESTAMPTZ,
    last_used_at    TIMESTAMPTZ,
    created_by      UUID REFERENCES users(user_id),
    created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 14. Audit logs
CREATE TABLE IF NOT EXISTS audit_logs (
    log_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID REFERENCES users(user_id),
    action          VARCHAR(100) NOT NULL,
    resource_type   VARCHAR(100),
    resource_id     VARCHAR(255),
    details         JSONB,
    ip_address      VARCHAR(45),
    user_agent      TEXT,
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created ON audit_logs(created_at);
CREATE INDEX IF NOT EXISTS idx_audit_logs_action ON audit_logs(action);

-- 15. Test report runs (one row per E2E test execution)
CREATE TABLE IF NOT EXISTS test_report_runs (
    run_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    total_tests     INT NOT NULL DEFAULT 0,
    passed          INT NOT NULL DEFAULT 0,
    failed          INT NOT NULL DEFAULT 0,
    total_duration  INT NOT NULL DEFAULT 0,
    module_summary  JSONB NOT NULL DEFAULT '[]',
    created_at      TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_test_report_runs_created ON test_report_runs(created_at);

-- 16. Test report results (individual test outcomes linked to a run)
CREATE TABLE IF NOT EXISTS test_report_results (
    result_id       UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    run_id          UUID NOT NULL REFERENCES test_report_runs(run_id) ON DELETE CASCADE,
    module          VARCHAR(100) NOT NULL,
    method          VARCHAR(10) NOT NULL,
    endpoint        VARCHAR(255) NOT NULL,
    description     VARCHAR(500) NOT NULL,
    status_code     INT NOT NULL,
    expected_status INT NOT NULL,
    response_status VARCHAR(20) NOT NULL,
    passed          BOOLEAN NOT NULL,
    duration_ms     INT NOT NULL DEFAULT 0,
    error_message   TEXT
);
CREATE INDEX IF NOT EXISTS idx_test_report_results_run ON test_report_results(run_id);

COMMIT;
