-- ============================================================
-- Centralized Auth - Seed Data
-- Run AFTER 001_auth_schema.sql
-- Populates: dashboards, roles, permissions, role_permissions
-- ============================================================

BEGIN;

-- ==================== DASHBOARDS ====================

INSERT INTO dashboards (code, name, description) VALUES
    ('crop_monitoring',   'Crop Monitoring Portal',     'Core product - partner-based remote farm health monitoring'),
    ('insights',          'Insights Dashboard',          'Central GIS layer repository with cross-dashboard analytics'),
    ('cane_monitoring',   'Cane Monitoring Dashboard',   'Sugar mill operations, harvest tracking, farmer management'),
    ('admin',             'Admin Dashboard',             'Master control panel for all dashboards, users, and data'),
    ('field_survey',      'Field Survey Dashboard',      'Agent management, QA, payroll, data pipeline'),
    ('field_survey_app',  'Field Survey App',            'Mobile data collection - surveys, tasks, offline sync')
ON CONFLICT (code) DO NOTHING;

-- ==================== ROLES ====================

-- Crop Monitoring roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'system_admin',    'System Admin',    'All partner data, custom circles, crop updates, complete management'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'executive_user',  'Executive User',  'Overview dashboard, aggregate stats, drill-down to farm level'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'partner_admin',   'Partner Admin',   'Create accounts, manage field agents, full access within partner'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'general_user',    'General User',    'Farm list landing, individual farm NDVI/indices, no exec overview'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'agri_expert',     'Agri-Expert',     'Cross-partner anomaly review, task assignment, advisory')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Insights roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'system_admin',          'System Admin',          'Access all layers, all regions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'partner_user',          'Partner User',          'Scoped to enabled layers only'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'analyst_user',          'Analyst User',          'Read-only cross-layer comparison'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'external_stakeholder',  'External Stakeholder',  'Limited view for govt/insurer')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Cane Monitoring roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'super_admin',      'Super Admin',      'All mills combined'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'mill_admin',       'Mill Admin',       'Mill-specific data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'unit_admin',       'Unit Admin',       'Unit-specific data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'multi_mill_admin', 'Multi-Mill Admin', '2+ mills combined')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Admin Dashboard roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'super_admin', 'Super Admin', 'Full platform control'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'executive',   'Executive',   'Read-only overview and reporting')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Field Survey Dashboard roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'system_admin',   'System Admin',    'Add/remove agents, assign regions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'qa_user',        'QA User',         'Approve/reject, request re-visits'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'qa_supervisor',  'QA Supervisor',   'Oversee multiple QA users')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Field Survey App roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey_app'), 'surveyor',        'Surveyor',         'Field data collection, boundary marking'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey_app'), 'field_executive',  'Field Executive',  'Supervisory field role with expanded access')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- ==================== PERMISSIONS ====================

-- Crop Monitoring permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'farms.view',         'View Farms',           'farm_management',    'View farm list and details'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'farms.manage',       'Manage Farms',         'farm_management',    'Create/edit/delete farms'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'farms.export',       'Export Farm Data',     'farm_management',    'Export farm data in various formats'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'indices.view',       'View Indices',         'analytics',          'View NDVI, NDMI, EVI and other indices'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'anomalies.view',     'View Anomalies',       'analytics',          'View detected anomalies'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'anomalies.manage',   'Manage Anomalies',     'analytics',          'Assign anomaly tasks to agents'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'agents.view',        'View Agents',          'agent_management',   'View field agents'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'agents.manage',      'Manage Agents',        'agent_management',   'Add/remove/assign agents'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'advisory.view',      'View Advisory',        'advisory',           'View advisories'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'advisory.create',    'Create Advisory',      'advisory',           'Create and send advisories'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'reports.view',       'View Reports',         'reports',            'View farm reports'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'reports.export',     'Export Reports',       'reports',            'Export PDF/email reports'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'weather.view',       'View Weather',         'analytics',          'View weather data and alerts'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'overview.view',      'View Overview',        'dashboard',          'View executive overview dashboard'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'disease_risk.view',  'View Disease Risk',    'analytics',          'View disease risk predictions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'crop_monitoring'), 'yield.view',         'View Yield Estimates', 'analytics',          'View yield predictions')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Insights permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'layers.view',          'View Layers',            'layer_management', 'View GIS layers'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'layers.manage',        'Manage Layers',          'layer_management', 'Publish/unpublish layers'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'classification.view',  'View Classification',    'analytics',        'View ML classification results'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'benchmarking.view',    'View Benchmarking',      'analytics',        'View farm vs region comparison'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'carbon.view',          'View Carbon Metrics',    'analytics',        'View carbon footprint data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'trends.view',          'View Multi-Year Trends', 'analytics',        'View multi-year trend analysis'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'insights'), 'data.export',          'Export Data',            'data_export',      'Export GeoJSON, SHP, KML, CSV')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Cane Monitoring permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'mills.view',          'View Mills',           'mill_management',  'View sugar mill data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'mills.manage',        'Manage Mills',         'mill_management',  'Create/edit mill settings'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'harvest.view',        'View Harvest',         'harvest',          'View harvest monitoring data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'harvest.manage',      'Manage Harvest',       'harvest',          'Update harvest records'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'farmers.view',        'View Farmers',         'farmer_mgmt',      'View farmer info and loans'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'farmers.manage',      'Manage Farmers',       'farmer_mgmt',      'Edit farmer records'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'classification.view', 'View Classification',  'analytics',        'View ML classification results'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'ratoon.view',         'View Ratoon Data',     'analytics',        'View ratoon management data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'cane_monitoring'), 'yield.view',          'View Yield Prediction','analytics',        'View yield predictions per mill')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Admin Dashboard permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'partners.view',      'View Partners',       'partner_mgmt',  'View partner list'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'partners.manage',    'Manage Partners',     'partner_mgmt',  'Create/edit/deactivate partners'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'users.view',         'View Users',          'user_mgmt',     'View user accounts'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'users.manage',       'Manage Users',        'user_mgmt',     'Create/edit/deactivate users'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'roles.view',         'View Roles',          'access_control','View roles and assignments'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'roles.manage',       'Manage Roles',        'access_control','Create/edit roles, assign to users'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'layers.manage',      'Manage Layers',       'layer_mgmt',    'Publish/unpublish layers'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'api_keys.view',      'View API Keys',       'api_mgmt',      'View API key list'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'api_keys.manage',    'Manage API Keys',     'api_mgmt',      'Provision/revoke API keys'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'billing.view',       'View Billing',        'billing',       'View usage and billing data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'billing.manage',     'Manage Billing',      'billing',       'Configure pricing and credits'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'audit.view',         'View Audit Trail',    'audit',         'View audit logs'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'white_label.manage', 'Manage White-Label',  'white_label',   'Configure partner branding'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'platform.analytics', 'View Platform Stats', 'analytics',     'View platform usage analytics')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Field Survey Dashboard permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'agents.view',       'View Agents',          'agent_mgmt', 'View field agents'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'agents.manage',     'Manage Agents',        'agent_mgmt', 'Add/remove agents, assign regions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'surveys.view',      'View Surveys',         'survey_mgmt','View survey submissions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'surveys.qa',        'QA Surveys',           'qa',         'Approve/reject/request re-visit'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'surveys.supervise', 'Supervise QA',         'qa',         'Oversee QA users and their decisions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'payroll.view',      'View Payroll',         'payroll',    'View agent payroll data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'payroll.manage',    'Manage Payroll',       'payroll',    'Approve/process payroll'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'data.export',       'Export Data',          'data_export','Export shapefiles with quality metadata'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey'), 'performance.view',  'View Performance',     'analytics',  'View agent performance analytics')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Field Survey App permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey_app'), 'surveys.submit',      'Submit Surveys',     'survey',     'Submit field survey data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey_app'), 'boundaries.mark',     'Mark Boundaries',    'survey',     'Demarcate farm boundaries'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey_app'), 'photos.upload',       'Upload Photos',      'survey',     'Upload geotagged photos'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey_app'), 'tasks.view',          'View Tasks',         'tasks',      'View assigned tasks'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey_app'), 'tasks.execute',       'Execute Tasks',      'tasks',      'Complete assigned tasks'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_survey_app'), 'farmers.onboard',     'Onboard Farmers',    'farmer_mgmt','Register new farmers')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- ==================== ROLE-PERMISSION MAPPINGS ====================

-- Helper: Assign ALL permissions of a dashboard to its system_admin / super_admin role
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
WHERE r.code IN ('system_admin', 'super_admin')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Crop Monitoring: executive_user gets view + overview + reports
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'crop_monitoring' AND r.code = 'executive_user'
  AND p.code IN ('farms.view','indices.view','anomalies.view','weather.view','overview.view','reports.view','reports.export','disease_risk.view','yield.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Crop Monitoring: partner_admin gets everything except overview
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'crop_monitoring' AND r.code = 'partner_admin'
  AND p.code != 'overview.view'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Crop Monitoring: general_user gets basic view permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'crop_monitoring' AND r.code = 'general_user'
  AND p.code IN ('farms.view','indices.view','anomalies.view','weather.view','reports.view','disease_risk.view','yield.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Crop Monitoring: agri_expert gets anomaly + advisory management
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'crop_monitoring' AND r.code = 'agri_expert'
  AND p.code IN ('farms.view','indices.view','anomalies.view','anomalies.manage','advisory.view','advisory.create','disease_risk.view','weather.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Insights: partner_user gets view-only
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'insights' AND r.code = 'partner_user'
  AND p.code IN ('layers.view','classification.view','data.export')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Insights: analyst_user gets view + benchmarking + trends
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'insights' AND r.code = 'analyst_user'
  AND p.code IN ('layers.view','classification.view','benchmarking.view','carbon.view','trends.view','data.export')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Insights: external_stakeholder gets limited view
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'insights' AND r.code = 'external_stakeholder'
  AND p.code IN ('layers.view','benchmarking.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Cane: mill_admin gets everything except multi-mill
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'cane_monitoring' AND r.code = 'mill_admin'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Cane: unit_admin gets view permissions + harvest manage
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'cane_monitoring' AND r.code = 'unit_admin'
  AND p.code IN ('mills.view','harvest.view','harvest.manage','farmers.view','farmers.manage','classification.view','ratoon.view','yield.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Cane: multi_mill_admin = same as super_admin (already covered above via super_admin rule)
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'cane_monitoring' AND r.code = 'multi_mill_admin'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Admin: executive gets view-only
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'admin' AND r.code = 'executive'
  AND p.code LIKE '%.view' OR p.code = 'platform.analytics'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Field Survey: qa_user gets surveys view + qa
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'field_survey' AND r.code = 'qa_user'
  AND p.code IN ('surveys.view','surveys.qa','agents.view','performance.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Field Survey: qa_supervisor gets qa + supervise
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'field_survey' AND r.code = 'qa_supervisor'
  AND p.code IN ('surveys.view','surveys.qa','surveys.supervise','agents.view','payroll.view','data.export','performance.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Field Survey App: surveyor gets submit + tasks
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'field_survey_app' AND r.code = 'surveyor'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Field Survey App: field_executive gets everything
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'field_survey_app' AND r.code = 'field_executive'
ON CONFLICT (role_id, permission_id) DO NOTHING;

COMMIT;
