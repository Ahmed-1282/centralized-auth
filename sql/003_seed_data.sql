-- ============================================================
-- GIS Auth - Seed Data (Simplified Schema)
-- Run AFTER 001_auth_schema.sql
-- Populates: roles (with dashboard varchar + permissions JSONB)
-- ============================================================

BEGIN;

-- ==================== ROLES ====================
-- Each role has: dashboard (varchar), code, name, description, permissions (JSONB)
-- Permissions JSONB is empty {} for now — will be populated once business defines key-value pairs

-- Crop Monitoring roles
INSERT INTO roles (dashboard, code, name, description, permissions) VALUES
    ('crop_monitoring', 'system_admin',    'System Admin',    'All partner data, custom circles, crop updates, complete management', '{}'),
    ('crop_monitoring', 'executive_user',  'Executive User',  'Overview dashboard, aggregate stats, drill-down to farm level', '{}'),
    ('crop_monitoring', 'partner_admin',   'Partner Admin',   'Create accounts, manage field agents, full access within partner', '{}'),
    ('crop_monitoring', 'general_user',    'General User',    'Farm list landing, individual farm NDVI/indices, no exec overview', '{}'),
    ('crop_monitoring', 'agri_expert',     'Agri-Expert',     'Cross-partner anomaly review, task assignment, advisory', '{}')
ON CONFLICT (dashboard, code) DO NOTHING;

-- Insights roles
INSERT INTO roles (dashboard, code, name, description, permissions) VALUES
    ('insights', 'system_admin',          'System Admin',          'Access all layers, all regions', '{}'),
    ('insights', 'partner_user',          'Partner User',          'Scoped to enabled layers only', '{}'),
    ('insights', 'analyst_user',          'Analyst User',          'Read-only cross-layer comparison', '{}'),
    ('insights', 'external_stakeholder',  'External Stakeholder',  'Limited view for govt/insurer', '{}')
ON CONFLICT (dashboard, code) DO NOTHING;

-- Cane Monitoring roles
INSERT INTO roles (dashboard, code, name, description, permissions) VALUES
    ('cane_monitoring', 'super_admin',      'Super Admin',      'All mills combined', '{}'),
    ('cane_monitoring', 'mill_admin',       'Mill Admin',       'Mill-specific data', '{}'),
    ('cane_monitoring', 'unit_admin',       'Unit Admin',       'Unit-specific data', '{}'),
    ('cane_monitoring', 'multi_mill_admin', 'Multi-Mill Admin', '2+ mills combined', '{}')
ON CONFLICT (dashboard, code) DO NOTHING;

-- Admin Dashboard roles
INSERT INTO roles (dashboard, code, name, description, permissions) VALUES
    ('admin', 'super_admin', 'Super Admin', 'Full platform control', '{}'),
    ('admin', 'executive',   'Executive',   'Read-only overview and reporting', '{}')
ON CONFLICT (dashboard, code) DO NOTHING;

-- Field Survey Dashboard roles
INSERT INTO roles (dashboard, code, name, description, permissions) VALUES
    ('field_survey', 'system_admin',   'System Admin',    'Add/remove agents, assign regions', '{}'),
    ('field_survey', 'qa_user',        'QA User',         'Approve/reject, request re-visits', '{}'),
    ('field_survey', 'qa_supervisor',  'QA Supervisor',   'Oversee multiple QA users', '{}')
ON CONFLICT (dashboard, code) DO NOTHING;

-- Field Survey App roles
INSERT INTO roles (dashboard, code, name, description, permissions) VALUES
    ('field_survey_app', 'surveyor',        'Surveyor',         'Field data collection, boundary marking', '{}'),
    ('field_survey_app', 'field_executive',  'Field Executive',  'Supervisory field role with expanded access', '{}')
ON CONFLICT (dashboard, code) DO NOTHING;

COMMIT;
