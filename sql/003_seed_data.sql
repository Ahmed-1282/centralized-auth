-- ============================================================
-- Centralized Auth - Seed Data
-- Run AFTER 001_auth_schema.sql
-- Populates: dashboards, roles, permissions, role_permissions
-- ============================================================

BEGIN;

-- ==================== DASHBOARDS ====================

INSERT INTO dashboards (code, name, description) VALUES
    ('operations',    'Operations Dashboard',      'Real-time operational monitoring and resource management'),
    ('analytics',     'Analytics Dashboard',        'Cross-platform analytics, reporting, and insights'),
    ('supply_chain',  'Supply Chain Dashboard',     'End-to-end supply chain tracking and management'),
    ('admin',         'Admin Dashboard',            'Master control panel for all dashboards, users, and data'),
    ('field_ops',     'Field Operations Dashboard', 'Agent management, QA, payroll, data pipeline'),
    ('mobile_app',    'Mobile App',                 'Mobile data collection - tasks, submissions, offline sync')
ON CONFLICT (code) DO NOTHING;

-- ==================== ROLES ====================

-- Operations roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'system_admin',    'System Admin',    'Full access to all operational data and configuration'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'executive_user',  'Executive User',  'Overview dashboard, aggregate stats, drill-down access'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'partner_admin',   'Partner Admin',   'Full access within partner scope, manage agents and users'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'general_user',    'General User',    'Standard view access to resources and reports'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'domain_expert',   'Domain Expert',   'Cross-partner review, task assignment, advisory')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Analytics roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'system_admin',          'System Admin',          'Access all data layers, all regions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'partner_user',          'Partner User',          'Scoped to enabled data layers only'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'analyst_user',          'Analyst User',          'Read-only cross-layer comparison and trends'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'external_stakeholder',  'External Stakeholder',  'Limited view for external partners or auditors')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Supply Chain roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'super_admin',          'Super Admin',          'All facilities combined'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'facility_admin',       'Facility Admin',       'Facility-specific data and operations'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'unit_admin',           'Unit Admin',           'Unit-specific data within a facility'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'multi_facility_admin', 'Multi-Facility Admin', 'Access across 2+ facilities')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Admin Dashboard roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'super_admin', 'Super Admin', 'Full platform control'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'executive',   'Executive',   'Read-only overview and reporting')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Field Operations roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'system_admin',   'System Admin',    'Add/remove agents, assign regions, full access'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'qa_user',        'QA User',         'Review and approve/reject submissions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'qa_supervisor',  'QA Supervisor',   'Oversee multiple QA users and escalations')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Mobile App roles
INSERT INTO roles (dashboard_id, code, name, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'mobile_app'), 'field_agent',      'Field Agent',      'Field data collection and task execution'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'mobile_app'), 'field_executive',  'Field Executive',  'Supervisory field role with expanded access')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- ==================== PERMISSIONS ====================

-- Operations permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'resources.view',        'View Resources',         'resource_management', 'View resource list and details'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'resources.manage',      'Manage Resources',       'resource_management', 'Create/edit/delete resources'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'resources.export',      'Export Resources',       'resource_management', 'Export resource data in various formats'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'metrics.view',          'View Metrics',           'analytics',           'View key performance metrics and indices'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'alerts.view',           'View Alerts',            'analytics',           'View detected alerts and anomalies'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'alerts.manage',         'Manage Alerts',          'analytics',           'Assign alert tasks to agents'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'agents.view',           'View Agents',            'agent_management',    'View field agents'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'agents.manage',         'Manage Agents',          'agent_management',    'Add/remove/assign agents'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'notifications.view',    'View Notifications',     'notifications',       'View notifications and advisories'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'notifications.create',  'Create Notifications',   'notifications',       'Create and send notifications'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'reports.view',          'View Reports',           'reports',             'View operational reports'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'reports.export',        'Export Reports',         'reports',             'Export PDF/email reports'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'external_data.view',    'View External Data',     'analytics',           'View external data feeds and integrations'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'overview.view',         'View Overview',          'dashboard',           'View executive overview dashboard'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'risk.view',             'View Risk Assessment',   'analytics',           'View risk predictions and assessments'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'operations'), 'forecasts.view',        'View Forecasts',         'analytics',           'View forecast and prediction data')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Analytics permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'layers.view',          'View Layers',            'layer_management', 'View data layers'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'layers.manage',        'Manage Layers',          'layer_management', 'Publish/unpublish data layers'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'classification.view',  'View Classification',    'analytics',        'View ML classification results'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'benchmarking.view',    'View Benchmarking',      'analytics',        'View comparative benchmarks'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'carbon.view',          'View Carbon Metrics',    'analytics',        'View carbon footprint data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'trends.view',          'View Multi-Year Trends', 'analytics',        'View multi-year trend analysis'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'analytics'), 'data.export',          'Export Data',            'data_export',      'Export data in various formats')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Supply Chain permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'facilities.view',       'View Facilities',       'facility_management', 'View facility data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'facilities.manage',     'Manage Facilities',     'facility_management', 'Create/edit facility settings'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'inventory.view',        'View Inventory',        'inventory',           'View inventory and stock data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'inventory.manage',      'Manage Inventory',      'inventory',           'Update inventory records'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'suppliers.view',        'View Suppliers',        'supplier_mgmt',       'View supplier information'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'suppliers.manage',      'Manage Suppliers',      'supplier_mgmt',       'Edit supplier records'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'classification.view',   'View Classification',   'analytics',           'View ML classification results'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'tracking.view',         'View Tracking',         'analytics',           'View shipment and order tracking'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'supply_chain'), 'forecasts.view',        'View Forecasts',        'analytics',           'View demand and supply forecasts')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Admin Dashboard permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'partners.view',      'View Partners',       'partner_mgmt',  'View partner list'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'partners.manage',    'Manage Partners',     'partner_mgmt',  'Create/edit/deactivate partners'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'users.view',         'View Users',          'user_mgmt',     'View user accounts'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'users.manage',       'Manage Users',        'user_mgmt',     'Create/edit/deactivate users'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'roles.view',         'View Roles',          'access_control','View roles and assignments'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'roles.manage',       'Manage Roles',        'access_control','Create/edit roles, assign to users'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'layers.manage',      'Manage Layers',       'layer_mgmt',    'Publish/unpublish data layers'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'api_keys.view',      'View API Keys',       'api_mgmt',      'View API key list'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'api_keys.manage',    'Manage API Keys',     'api_mgmt',      'Provision/revoke API keys'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'billing.view',       'View Billing',        'billing',       'View usage and billing data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'billing.manage',     'Manage Billing',      'billing',       'Configure pricing and credits'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'audit.view',         'View Audit Trail',    'audit',         'View audit logs'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'white_label.manage', 'Manage White-Label',  'white_label',   'Configure partner branding'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'admin'), 'platform.analytics', 'View Platform Stats', 'analytics',     'View platform usage analytics')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Field Operations permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'agents.view',          'View Agents',          'agent_mgmt', 'View field agents'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'agents.manage',        'Manage Agents',        'agent_mgmt', 'Add/remove agents, assign regions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'submissions.view',     'View Submissions',     'submission_mgmt', 'View field submissions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'submissions.qa',       'QA Submissions',       'qa',         'Approve/reject/request re-submission'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'submissions.supervise','Supervise QA',         'qa',         'Oversee QA users and their decisions'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'payroll.view',         'View Payroll',         'payroll',    'View agent payroll data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'payroll.manage',       'Manage Payroll',       'payroll',    'Approve/process payroll'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'data.export',          'Export Data',          'data_export','Export data with quality metadata'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'field_ops'), 'performance.view',     'View Performance',     'analytics',  'View agent performance analytics')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- Mobile App permissions
INSERT INTO permissions (dashboard_id, code, name, module, description) VALUES
    ((SELECT dashboard_id FROM dashboards WHERE code = 'mobile_app'), 'data.submit',         'Submit Data',          'data_collection', 'Submit field data'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'mobile_app'), 'boundaries.mark',     'Mark Boundaries',      'data_collection', 'Demarcate geographic boundaries'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'mobile_app'), 'photos.upload',       'Upload Photos',        'data_collection', 'Upload geotagged photos'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'mobile_app'), 'tasks.view',          'View Tasks',           'tasks',           'View assigned tasks'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'mobile_app'), 'tasks.execute',       'Execute Tasks',        'tasks',           'Complete assigned tasks'),
    ((SELECT dashboard_id FROM dashboards WHERE code = 'mobile_app'), 'contacts.onboard',    'Onboard Contacts',     'contact_mgmt',    'Register new contacts')
ON CONFLICT (dashboard_id, code) DO NOTHING;

-- ==================== ROLE-PERMISSION MAPPINGS ====================

-- Helper: Assign ALL permissions of a dashboard to its system_admin / super_admin role
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
WHERE r.code IN ('system_admin', 'super_admin')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Operations: executive_user gets view + overview + reports
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'operations' AND r.code = 'executive_user'
  AND p.code IN ('resources.view','metrics.view','alerts.view','external_data.view','overview.view','reports.view','reports.export','risk.view','forecasts.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Operations: partner_admin gets everything except overview
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'operations' AND r.code = 'partner_admin'
  AND p.code != 'overview.view'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Operations: general_user gets basic view permissions
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'operations' AND r.code = 'general_user'
  AND p.code IN ('resources.view','metrics.view','alerts.view','external_data.view','reports.view','risk.view','forecasts.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Operations: domain_expert gets alerts + notifications management
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'operations' AND r.code = 'domain_expert'
  AND p.code IN ('resources.view','metrics.view','alerts.view','alerts.manage','notifications.view','notifications.create','risk.view','external_data.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Analytics: partner_user gets view-only
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'analytics' AND r.code = 'partner_user'
  AND p.code IN ('layers.view','classification.view','data.export')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Analytics: analyst_user gets view + benchmarking + trends
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'analytics' AND r.code = 'analyst_user'
  AND p.code IN ('layers.view','classification.view','benchmarking.view','carbon.view','trends.view','data.export')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Analytics: external_stakeholder gets limited view
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'analytics' AND r.code = 'external_stakeholder'
  AND p.code IN ('layers.view','benchmarking.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Supply Chain: facility_admin gets everything
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'supply_chain' AND r.code = 'facility_admin'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Supply Chain: unit_admin gets view permissions + inventory manage
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'supply_chain' AND r.code = 'unit_admin'
  AND p.code IN ('facilities.view','inventory.view','inventory.manage','suppliers.view','suppliers.manage','classification.view','tracking.view','forecasts.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Supply Chain: multi_facility_admin gets everything (same as super_admin, already covered)
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'supply_chain' AND r.code = 'multi_facility_admin'
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

-- Field Ops: qa_user gets submissions view + qa
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'field_ops' AND r.code = 'qa_user'
  AND p.code IN ('submissions.view','submissions.qa','agents.view','performance.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Field Ops: qa_supervisor gets qa + supervise
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'field_ops' AND r.code = 'qa_supervisor'
  AND p.code IN ('submissions.view','submissions.qa','submissions.supervise','agents.view','payroll.view','data.export','performance.view')
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Mobile App: field_agent gets all
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'mobile_app' AND r.code = 'field_agent'
ON CONFLICT (role_id, permission_id) DO NOTHING;

-- Mobile App: field_executive gets everything
INSERT INTO role_permissions (role_id, permission_id)
SELECT r.role_id, p.permission_id
FROM roles r
JOIN permissions p ON p.dashboard_id = r.dashboard_id
JOIN dashboards d ON d.dashboard_id = r.dashboard_id
WHERE d.code = 'mobile_app' AND r.code = 'field_executive'
ON CONFLICT (role_id, permission_id) DO NOTHING;

COMMIT;
