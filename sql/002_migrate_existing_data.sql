-- ============================================================
-- GIS Auth - Data Migration from Legacy Tables
-- Migrates: partners -> partners_v2, partner_login -> users, partner_agents -> agents
--
-- IMPORTANT: Run 001_auth_schema.sql and 003_seed_data.sql FIRST
-- NOTE: Existing passwords are likely plaintext. After migration,
--       users MUST reset passwords (or re-hash via application code).
-- ============================================================

BEGIN;

-- Step 1: Migrate partners -> partners_v2
INSERT INTO partners_v2 (partner_id, name, address, contact_no, email, credits, message_credits)
SELECT
    partner_id,
    COALESCE(name, 'Unnamed Partner'),
    address,
    contact_no,
    email,
    COALESCE(credits, 0),
    COALESCE(message_credits, 0)
FROM partners
ON CONFLICT (partner_id) DO NOTHING;

-- Step 2: Migrate partner_login -> users
-- NOTE: password_hash column will contain the PLAINTEXT password from legacy.
-- You MUST run the application-level bcrypt re-hash script after this migration.
INSERT INTO users (
    user_id,
    username,
    password_hash,
    full_name,
    is_active,
    is_system_user,
    partner_id
)
SELECT
    COALESCE(id, gen_random_uuid()),
    username,
    COALESCE(password, 'NEEDS_RESET'),  -- legacy plaintext, must be re-hashed
    name,
    (deleted_at IS NULL),
    (partner_uuid IS NULL),             -- system user if no partner
    partner_uuid
FROM partner_login
WHERE username IS NOT NULL
ON CONFLICT (username) DO NOTHING;

-- Step 3: Assign default roles to migrated users based on legacy permission field
-- Map legacy 'permission' values to new roles on crop_monitoring dashboard
-- Adjust these mappings based on your actual legacy permission values

-- System admins (legacy permission = 'admin' or similar)
INSERT INTO user_roles (user_id, role_id)
SELECT u.user_id, r.role_id
FROM users u
JOIN partner_login pl ON pl.username = u.username
JOIN roles r ON r.code = 'system_admin'
JOIN dashboards d ON d.code = 'crop_monitoring' AND r.dashboard_id = d.dashboard_id
WHERE pl.permission IN ('admin', 'system_admin', 'superadmin')
ON CONFLICT (user_id, role_id) DO NOTHING;

-- Partner admins
INSERT INTO user_roles (user_id, role_id)
SELECT u.user_id, r.role_id
FROM users u
JOIN partner_login pl ON pl.username = u.username
JOIN roles r ON r.code = 'partner_admin'
JOIN dashboards d ON d.code = 'crop_monitoring' AND r.dashboard_id = d.dashboard_id
WHERE pl.permission IN ('partner_admin', 'partner')
ON CONFLICT (user_id, role_id) DO NOTHING;

-- General users (default for everyone else)
INSERT INTO user_roles (user_id, role_id)
SELECT u.user_id, r.role_id
FROM users u
JOIN partner_login pl ON pl.username = u.username
JOIN roles r ON r.code = 'general_user'
JOIN dashboards d ON d.code = 'crop_monitoring' AND r.dashboard_id = d.dashboard_id
WHERE pl.permission NOT IN ('admin', 'system_admin', 'superadmin', 'partner_admin', 'partner')
   OR pl.permission IS NULL
ON CONFLICT (user_id, role_id) DO NOTHING;

-- Step 4: Assign insights roles based on legacy insights_role
INSERT INTO user_roles (user_id, role_id)
SELECT u.user_id, r.role_id
FROM users u
JOIN partner_login pl ON pl.username = u.username
JOIN roles r ON r.code = CASE
    WHEN pl.insights_role = 'admin' THEN 'system_admin'
    WHEN pl.insights_role = 'analyst' THEN 'analyst_user'
    ELSE 'partner_user'
END
JOIN dashboards d ON d.code = 'insights' AND r.dashboard_id = d.dashboard_id
WHERE pl.insights_role IS NOT NULL
ON CONFLICT (user_id, role_id) DO NOTHING;

-- Step 5: Migrate partner_agents -> agents
INSERT INTO agents (partner_id, msisdn, subscriber_name, status, created_at)
SELECT
    pa.partner_id::UUID,
    pa.msisdn,
    pa.subscriber,
    COALESCE(pa.status, 'active'),
    COALESCE(pa.create_dt, NOW())
FROM partner_agents pa
WHERE EXISTS (SELECT 1 FROM partners_v2 p WHERE p.partner_id = pa.partner_id::UUID)
ON CONFLICT (partner_id, msisdn) DO NOTHING;

-- Step 6: Enable all dashboards for migrated partners (crop_monitoring by default)
INSERT INTO partner_dashboards (partner_id, dashboard_id, is_enabled)
SELECT p.partner_id, d.dashboard_id, TRUE
FROM partners_v2 p
CROSS JOIN dashboards d
WHERE d.code = 'crop_monitoring'
ON CONFLICT (partner_id, dashboard_id) DO NOTHING;

COMMIT;

-- ============================================================
-- POST-MIGRATION: Run this via application code to bcrypt-hash passwords
--
-- SELECT user_id, password_hash FROM users WHERE password_hash NOT LIKE '$2b$%';
-- Then for each row: UPDATE users SET password_hash = bcrypt(password_hash) WHERE user_id = ?;
-- ============================================================
