-- ============================================================
-- GIS Auth - Database Schema (Simplified)
-- ============================================================
-- Tables removed in simplification:
--   dashboards, permissions, role_permissions,
--   user_permissions, partner_dashboards, partner_feature_toggles
-- ============================================================

BEGIN;

-- 1. Partners
CREATE TABLE IF NOT EXISTS partners (
    partner_id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name                VARCHAR(255) NOT NULL,
    slug                VARCHAR(100) UNIQUE,
    address             TEXT,
    contact_no          VARCHAR(50),
    email               VARCHAR(255),
    logo_url            VARCHAR(500),
    credits             BIGINT DEFAULT 0,
    message_credits     BIGINT DEFAULT 0,
    settings            JSONB DEFAULT '{}',
    allowed_dashboards  TEXT[] DEFAULT '{}',
    is_active           BOOLEAN DEFAULT TRUE,
    created_at          TIMESTAMPTZ DEFAULT NOW(),
    updated_at          TIMESTAMPTZ DEFAULT NOW(),
    deleted_at          TIMESTAMPTZ
);

-- 2. Roles (dashboard as varchar, permissions as JSONB)
CREATE TABLE IF NOT EXISTS roles (
    role_id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dashboard       VARCHAR(100) NOT NULL,
    code            VARCHAR(50) NOT NULL,
    name            VARCHAR(255) NOT NULL,
    description     TEXT,
    permissions     JSONB DEFAULT '{}',
    is_system_role  BOOLEAN DEFAULT TRUE,
    UNIQUE(dashboard, code)
);

-- 3. Users
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

-- 4. User-Role assignments (one role per dashboard per user)
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

-- 5. Agents
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

-- 6. Refresh tokens
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

-- 7. API keys
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

-- 8. Audit logs
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

-- 9. Test report runs
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

-- 10. Test report results
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
