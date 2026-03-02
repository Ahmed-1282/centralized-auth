/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import request from 'supertest';
import * as path from 'path';
import { Client } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const BASE_URL = 'http://localhost:3001';
const TIMESTAMP = Date.now();

// ============================================================
// Shared state across all test suites (populated sequentially)
// ============================================================
let accessToken: string;
let refreshToken: string;
let superadminUserId: string;

let createdPartnerId: string;
let createdUserId: string;
let createdRoleId: string;
let createdPermissionId: string;
let createdAgentId: string;
let createdApiKeyId: string;

let existingPermissionId: string;

// State for negative / edge-case test modules
let deactivatedUserId: string | undefined;
let partnerUserAccessToken: string;
let partnerUserRefreshToken: string;

// ============================================================
// CSV Report — collects results for every test
// ============================================================
interface TestResult {
  module: string;
  method: string;
  endpoint: string;
  description: string;
  statusCode: number;
  expectedStatus: number;
  responseStatus: string; // "success" | "error"
  passed: boolean;
  durationMs: number;
  errorMessage: string;
}

const testResults: TestResult[] = [];
let currentModule = '';

function recordResult(
  method: string,
  endpoint: string,
  description: string,
  res: any,
  expectedStatus: number,
  passed: boolean,
  durationMs: number,
  errorMessage = '',
) {
  testResults.push({
    module: currentModule,
    method,
    endpoint,
    description,
    statusCode: res?.status ?? 0,
    expectedStatus,
    responseStatus: res?.body?.status ?? 'N/A',
    passed,
    durationMs: Math.round(durationMs),
    errorMessage,
  });
}

// ============================================================
// Helpers for authenticated requests
// ============================================================
const authGet = (p: string) =>
  request(BASE_URL).get(p).set('Authorization', `Bearer ${accessToken}`);

const authPost = (p: string) =>
  request(BASE_URL).post(p).set('Authorization', `Bearer ${accessToken}`);

const authPatch = (p: string) =>
  request(BASE_URL).patch(p).set('Authorization', `Bearer ${accessToken}`);

const authDelete = (p: string) =>
  request(BASE_URL).delete(p).set('Authorization', `Bearer ${accessToken}`);

// Helper to run a test and record its result
async function runTest(
  method: string,
  endpoint: string,
  description: string,
  expectedStatus: number,
  fn: () => Promise<any>,
) {
  const start = performance.now();
  try {
    const res = await fn();
    const duration = performance.now() - start;
    const passed =
      res.status === expectedStatus && res.body.status === 'success';
    recordResult(
      method,
      endpoint,
      description,
      res,
      expectedStatus,
      passed,
      duration,
    );
    return res;
  } catch (err: any) {
    const duration = performance.now() - start;
    recordResult(
      method,
      endpoint,
      description,
      err.response,
      expectedStatus,
      false,
      duration,
      err.message,
    );
    throw err;
  }
}

// Helper to run a negative test (expects error response)
async function runNegativeTest(
  method: string,
  endpoint: string,
  description: string,
  expectedStatus: number,
  fn: () => Promise<any>,
) {
  const start = performance.now();
  try {
    const res = await fn();
    const duration = performance.now() - start;
    const passed = res.status === expectedStatus && res.body.status === 'error';
    recordResult(
      method,
      endpoint,
      description,
      res,
      expectedStatus,
      passed,
      duration,
    );
    return res;
  } catch (err: any) {
    const duration = performance.now() - start;
    recordResult(
      method,
      endpoint,
      description,
      err.response,
      expectedStatus,
      false,
      duration,
      err.message,
    );
    throw err;
  }
}

// ============================================================
// Health check — fail fast if server is not running
// ============================================================
beforeAll(async () => {
  try {
    await request(BASE_URL).get('/api').expect(200);
  } catch {
    throw new Error(
      `Server not running at ${BASE_URL}. Start it first: npm run start:dev`,
    );
  }
});

// ============================================================
// Save test report to database after all tests complete
// ============================================================
afterAll(async () => {
  // Summary
  const passed = testResults.filter((r) => r.passed).length;
  const failed = testResults.filter((r) => !r.passed).length;
  const totalTime = testResults.reduce((sum, r) => sum + r.durationMs, 0);

  // Module-level summary data
  const modules = [...new Set(testResults.map((r) => r.module))];
  const moduleStats = modules.map((m) => {
    const modTests = testResults.filter((r) => r.module === m);
    const modPassed = modTests.filter((r) => r.passed).length;
    const modTotal = modTests.length;
    const modTime = modTests.reduce((s, r) => s + r.durationMs, 0);
    return { name: m, passed: modPassed, total: modTotal, time: modTime };
  });

  const moduleSummaryText = moduleStats
    .map(
      (s) =>
        `  ${s.passed === s.total ? 'PASS' : 'FAIL'}  ${s.name}: ${s.passed}/${s.total} (${Math.round(s.time)}ms)`,
    )
    .join('\n');

  // ========================================================
  // Save to database
  // ========================================================
  const reportClient = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  let runId: string | null = null;
  try {
    await reportClient.connect();

    // Insert the run summary
    const runResult = await reportClient.query(
      `INSERT INTO test_report_runs (total_tests, passed, failed, total_duration, module_summary)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING run_id`,
      [
        passed + failed,
        passed,
        failed,
        Math.round(totalTime),
        JSON.stringify(moduleStats),
      ],
    );
    runId = runResult.rows[0].run_id;

    // Batch insert all test results
    if (testResults.length > 0) {
      const values: any[] = [];
      const placeholders: string[] = [];
      let idx = 1;

      for (const r of testResults) {
        placeholders.push(
          `($${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++}, $${idx++})`,
        );
        values.push(
          runId,
          r.module,
          r.method,
          r.endpoint,
          r.description,
          r.statusCode,
          r.expectedStatus,
          r.responseStatus,
          r.passed,
          Math.round(r.durationMs),
          r.errorMessage || null,
        );
      }

      await reportClient.query(
        `INSERT INTO test_report_results
          (run_id, module, method, endpoint, description, status_code, expected_status, response_status, passed, duration_ms, error_message)
         VALUES ${placeholders.join(', ')}`,
        values,
      );
    }

    console.log('  Report saved to database');
  } catch (reportErr: any) {
    console.error('  Failed to save report to DB:', reportErr.message);
  } finally {
    await reportClient.end();
  }

  const port = process.env.PORT || 3001;
  console.log('\n========================================');
  console.log('  E2E TEST REPORT');
  console.log('========================================');
  console.log(moduleSummaryText);
  console.log('----------------------------------------');
  console.log(
    `  Total: ${passed + failed} | Passed: ${passed} | Failed: ${failed} | Time: ${Math.round(totalTime)}ms`,
  );
  if (runId) {
    console.log(
      `  View:  http://localhost:${port}/api/test-reports/${runId}/html`,
    );
    console.log(
      `  Latest: http://localhost:${port}/api/test-reports/latest/html`,
    );
    console.log(`  Index: http://localhost:${port}/api/test-reports/index`);
  }
  console.log('========================================\n');

  // ========================================================
  // DATABASE CLEANUP — remove all test data so DB stays clean
  // ========================================================
  const client = new Client({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  });

  try {
    await client.connect();

    // Find throwaway partner/user created for delete tests
    const { rows: extraPartners } = await client.query(
      `SELECT partner_id FROM partners WHERE slug = $1`,
      [`delete-me-${TIMESTAMP}`],
    );
    const { rows: extraUsers } = await client.query(
      `SELECT user_id FROM users WHERE username = $1`,
      [`e2e_deluser_${TIMESTAMP}`],
    );
    const { rows: deactivatedUsers } = await client.query(
      `SELECT user_id FROM users WHERE username = $1`,
      [`e2e_deactivated_${TIMESTAMP}`],
    );

    const allPartnerIds = [
      createdPartnerId,
      ...extraPartners.map((r) => r.partner_id),
    ].filter(Boolean);

    const allUserIds = [
      createdUserId,
      deactivatedUserId,
      ...extraUsers.map((r) => r.user_id),
      ...deactivatedUsers.map((r) => r.user_id),
    ].filter(Boolean);

    const allResourceIds = [
      ...allPartnerIds,
      ...allUserIds,
      createdRoleId,
      createdPermissionId,
      createdAgentId,
      createdApiKeyId,
    ].filter(Boolean);

    // Delete in FK-safe order (children first, parents last)

    if (allResourceIds.length > 0) {
      await client.query(
        `DELETE FROM audit_logs WHERE resource_id = ANY($1::text[])`,
        [allResourceIds],
      );
    }

    if (allUserIds.length > 0) {
      await client.query(
        `DELETE FROM refresh_tokens WHERE user_id = ANY($1::uuid[])`,
        [allUserIds],
      );
      await client.query(
        `DELETE FROM user_permissions WHERE user_id = ANY($1::uuid[])`,
        [allUserIds],
      );
      await client.query(
        `DELETE FROM user_roles WHERE user_id = ANY($1::uuid[])`,
        [allUserIds],
      );
    }

    if (createdRoleId) {
      await client.query(`DELETE FROM role_permissions WHERE role_id = $1`, [
        createdRoleId,
      ]);
    }

    if (allPartnerIds.length > 0) {
      await client.query(
        `DELETE FROM partner_feature_toggles WHERE partner_id = ANY($1::uuid[])`,
        [allPartnerIds],
      );
      await client.query(
        `DELETE FROM partner_dashboards WHERE partner_id = ANY($1::uuid[])`,
        [allPartnerIds],
      );
      await client.query(
        `DELETE FROM api_keys WHERE partner_id = ANY($1::uuid[])`,
        [allPartnerIds],
      );
      await client.query(
        `DELETE FROM agents WHERE partner_id = ANY($1::uuid[])`,
        [allPartnerIds],
      );
    }

    // Now delete parent records
    if (allUserIds.length > 0) {
      await client.query(`DELETE FROM users WHERE user_id = ANY($1::uuid[])`, [
        allUserIds,
      ]);
    }

    if (createdRoleId) {
      await client.query(`DELETE FROM roles WHERE role_id = $1`, [
        createdRoleId,
      ]);
    }

    if (createdPermissionId) {
      await client.query(`DELETE FROM permissions WHERE permission_id = $1`, [
        createdPermissionId,
      ]);
    }

    if (allPartnerIds.length > 0) {
      await client.query(
        `DELETE FROM partners WHERE partner_id = ANY($1::uuid[])`,
        [allPartnerIds],
      );
    }

    console.log('  Cleanup: all test data removed from database');
  } catch (cleanupErr: any) {
    console.error('  Cleanup failed:', cleanupErr.message);
  } finally {
    await client.end();
  }
});

// ============================================================
// 1. AUTH MODULE (5 tests)
// ============================================================
describe('Auth Module (/api/auth)', () => {
  beforeAll(() => {
    currentModule = 'Auth';
  });

  it('POST /api/auth/login — should login with superadmin', async () => {
    const res = await runTest(
      'POST',
      '/api/auth/login',
      'Login with superadmin',
      200,
      () =>
        request(BASE_URL)
          .post('/api/auth/login')
          .send({ username: 'superadmin', password: 'Password@123' }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.tokens.accessToken).toBeDefined();
    expect(res.body.data.tokens.refreshToken).toBeDefined();
    expect(res.body.data.user.isSystemUser).toBe(true);

    accessToken = res.body.data.tokens.accessToken;
    refreshToken = res.body.data.tokens.refreshToken;
    superadminUserId = res.body.data.user.userId;
  });

  it('POST /api/auth/refresh — should refresh the access token', async () => {
    const res = await runTest(
      'POST',
      '/api/auth/refresh',
      'Refresh access token',
      200,
      () => request(BASE_URL).post('/api/auth/refresh').send({ refreshToken }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.accessToken).toBeDefined();
    expect(res.body.data.refreshToken).toBeDefined();

    accessToken = res.body.data.accessToken;
    refreshToken = res.body.data.refreshToken;
  });

  it('GET /api/auth/me — should return current user profile', async () => {
    const res = await runTest(
      'GET',
      '/api/auth/me',
      'Get current user profile',
      200,
      () => authGet('/api/auth/me'),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.userId).toBe(superadminUserId);
    expect(res.body.data.username).toBe('superadmin');
  });

  it('POST /api/auth/logout — should revoke a specific refresh token', async () => {
    // Login again to get a separate token pair for this test
    const loginRes = await request(BASE_URL)
      .post('/api/auth/login')
      .send({ username: 'superadmin', password: 'Password@123' });

    const tempRefresh = loginRes.body.data.tokens.refreshToken;

    const res = await runTest(
      'POST',
      '/api/auth/logout',
      'Revoke specific refresh token',
      200,
      () => authPost('/api/auth/logout').send({ refreshToken: tempRefresh }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });

  it('POST /api/auth/logout-all — should revoke all refresh tokens', async () => {
    const res = await runTest(
      'POST',
      '/api/auth/logout-all',
      'Revoke all refresh tokens',
      200,
      () => authPost('/api/auth/logout-all'),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');

    // Re-login since all refresh tokens are now revoked
    const loginRes = await request(BASE_URL)
      .post('/api/auth/login')
      .send({ username: 'superadmin', password: 'Password@123' });

    accessToken = loginRes.body.data.tokens.accessToken;
    refreshToken = loginRes.body.data.tokens.refreshToken;
  });
});

// ============================================================
// 2. PARTNERS MODULE (7 tests)
// ============================================================
describe('Partners Module (/api/partners)', () => {
  beforeAll(() => {
    currentModule = 'Partners';
  });

  it('POST /api/partners — should create a new partner', async () => {
    const res = await runTest(
      'POST',
      '/api/partners',
      'Create new partner',
      201,
      () =>
        authPost('/api/partners').send({
          name: `E2E Partner ${TIMESTAMP}`,
          slug: `e2e-partner-${TIMESTAMP}`,
          email: `e2e_${TIMESTAMP}@test.com`,
          contactNo: '+923001234567',
          address: 'Test Address',
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.partnerId).toBeDefined();
    createdPartnerId = res.body.data.partnerId;
  });

  it('GET /api/partners — should list partners', async () => {
    const res = await runTest(
      'GET',
      '/api/partners',
      'List partners',
      200,
      () => authGet('/api/partners'),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.data).toBeInstanceOf(Array);
    expect(res.body.data.total).toBeGreaterThanOrEqual(1);
  });

  it('GET /api/partners/:id — should get partner by ID', async () => {
    const res = await runTest(
      'GET',
      `/api/partners/${createdPartnerId}`,
      'Get partner by ID',
      200,
      () => authGet(`/api/partners/${createdPartnerId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.partnerId).toBe(createdPartnerId);
  });

  it('PATCH /api/partners/:id — should update partner', async () => {
    const res = await runTest(
      'PATCH',
      `/api/partners/${createdPartnerId}`,
      'Update partner',
      200,
      () =>
        authPatch(`/api/partners/${createdPartnerId}`).send({
          name: `E2E Partner Updated ${TIMESTAMP}`,
        }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.name).toBe(`E2E Partner Updated ${TIMESTAMP}`);
  });

  it('POST /api/partners/:id/dashboards — should toggle dashboard access', async () => {
    const res = await runTest(
      'POST',
      `/api/partners/:id/dashboards`,
      'Toggle dashboard access',
      201,
      () =>
        authPost(`/api/partners/${createdPartnerId}/dashboards`).send({
          dashboardCode: 'crop_monitoring',
          isEnabled: true,
          config: { max_users: 50 },
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.isEnabled).toBe(true);
  });

  it('GET /api/partners/:id/dashboards — should get dashboard access', async () => {
    const res = await runTest(
      'GET',
      `/api/partners/:id/dashboards`,
      'Get dashboard access',
      200,
      () => authGet(`/api/partners/${createdPartnerId}/dashboards`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it('DELETE /api/partners/:id — should soft delete a partner', async () => {
    // Create a throwaway partner (keep createdPartnerId for later modules)
    const createRes = await authPost('/api/partners').send({
      name: `Delete Me ${TIMESTAMP}`,
      slug: `delete-me-${TIMESTAMP}`,
    });

    const deleteId = createRes.body.data.partnerId;

    const res = await runTest(
      'DELETE',
      `/api/partners/${deleteId}`,
      'Soft delete partner',
      200,
      () => authDelete(`/api/partners/${deleteId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');

    // Verify it's gone
    await authGet(`/api/partners/${deleteId}`).expect(404);
  });
});

// ============================================================
// 3. USERS MODULE (6 tests)
// ============================================================
describe('Users Module (/api/users)', () => {
  beforeAll(() => {
    currentModule = 'Users';
  });

  it('POST /api/users — should create a new user', async () => {
    const res = await runTest(
      'POST',
      '/api/users',
      'Create new user',
      201,
      () =>
        authPost('/api/users').send({
          username: `e2e_user_${TIMESTAMP}`,
          password: 'Password@123',
          email: `e2e_user_${TIMESTAMP}@test.com`,
          fullName: 'E2E Test User',
          partnerId: createdPartnerId,
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.userId).toBeDefined();
    createdUserId = res.body.data.userId;
  });

  it('GET /api/users — should list users', async () => {
    const res = await runTest('GET', '/api/users', 'List users', 200, () =>
      authGet('/api/users'),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.data).toBeInstanceOf(Array);
    expect(res.body.data.total).toBeGreaterThanOrEqual(2);
  });

  it('GET /api/users/:id — should get user by ID', async () => {
    const res = await runTest(
      'GET',
      `/api/users/${createdUserId}`,
      'Get user by ID',
      200,
      () => authGet(`/api/users/${createdUserId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.userId).toBe(createdUserId);
  });

  it('PATCH /api/users/:id — should update user', async () => {
    const res = await runTest(
      'PATCH',
      `/api/users/${createdUserId}`,
      'Update user',
      200,
      () =>
        authPatch(`/api/users/${createdUserId}`).send({
          fullName: 'E2E Updated User',
        }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.fullName).toBe('E2E Updated User');
  });

  it('PATCH /api/users/:id/password — should change password', async () => {
    const res = await runTest(
      'PATCH',
      `/api/users/:id/password`,
      'Change user password',
      200,
      () =>
        authPatch(`/api/users/${createdUserId}/password`).send({
          newPassword: 'NewPassword@456',
        }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });

  it('DELETE /api/users/:id — should soft delete a user', async () => {
    // Create a throwaway user (keep createdUserId for later modules)
    const createRes = await authPost('/api/users').send({
      username: `e2e_deluser_${TIMESTAMP}`,
      password: 'Password@123',
    });

    const deleteId = createRes.body.data.userId;

    const res = await runTest(
      'DELETE',
      `/api/users/${deleteId}`,
      'Soft delete user',
      200,
      () => authDelete(`/api/users/${deleteId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });
});

// ============================================================
// 4. ROLES MODULE (7 tests)
// ============================================================
describe('Roles Module (/api/roles)', () => {
  beforeAll(() => {
    currentModule = 'Roles';
  });

  it('POST /api/roles — should create a custom role', async () => {
    const res = await runTest(
      'POST',
      '/api/roles',
      'Create custom role',
      201,
      () =>
        authPost('/api/roles').send({
          dashboardCode: 'crop_monitoring',
          code: `e2e_role_${TIMESTAMP}`,
          name: `E2E Role ${TIMESTAMP}`,
          description: 'Created by E2E pipeline',
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.roleId).toBeDefined();
    createdRoleId = res.body.data.roleId;
  });

  it('GET /api/roles — should list roles', async () => {
    const res = await runTest(
      'GET',
      '/api/roles?dashboardCode=crop_monitoring',
      'List roles',
      200,
      () => authGet('/api/roles?dashboardCode=crop_monitoring'),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it('GET /api/roles/:id — should get role with permissions', async () => {
    const res = await runTest(
      'GET',
      `/api/roles/${createdRoleId}`,
      'Get role with permissions',
      200,
      () => authGet(`/api/roles/${createdRoleId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.roleId).toBe(createdRoleId);
  });

  it('PATCH /api/roles/:id/permissions — should set permissions for role', async () => {
    // Fetch seeded permission IDs
    const permsRes = await authGet(
      '/api/permissions?dashboardCode=crop_monitoring',
    );
    const permIds = permsRes.body.data
      .slice(0, 3)
      .map((p: any) => p.permissionId);

    if (permsRes.body.data.length > 0) {
      existingPermissionId = permsRes.body.data[0].permissionId;
    }

    const res = await runTest(
      'PATCH',
      `/api/roles/:id/permissions`,
      'Set role permissions',
      200,
      () =>
        authPatch(`/api/roles/${createdRoleId}/permissions`).send({
          permissionIds: permIds,
        }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });

  it('POST /api/roles/assign — should assign role to user', async () => {
    const res = await runTest(
      'POST',
      '/api/roles/assign',
      'Assign role to user',
      201,
      () =>
        authPost('/api/roles/assign').send({
          userId: createdUserId,
          roleId: createdRoleId,
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
  });

  it('GET /api/roles/user/:userId — should get user roles', async () => {
    const res = await runTest(
      'GET',
      `/api/roles/user/${createdUserId}`,
      'Get user roles',
      200,
      () => authGet(`/api/roles/user/${createdUserId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it('POST /api/roles/revoke — should revoke role from user', async () => {
    const res = await runTest(
      'POST',
      '/api/roles/revoke',
      'Revoke role from user',
      200,
      () =>
        authPost('/api/roles/revoke').send({
          userId: createdUserId,
          roleId: createdRoleId,
        }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });
});

// ============================================================
// 5. PERMISSIONS MODULE (7 tests)
// ============================================================
describe('Permissions Module (/api/permissions)', () => {
  beforeAll(() => {
    currentModule = 'Permissions';
  });

  it('POST /api/permissions — should create a permission', async () => {
    const res = await runTest(
      'POST',
      '/api/permissions',
      'Create permission',
      201,
      () =>
        authPost('/api/permissions').send({
          dashboardCode: 'crop_monitoring',
          code: `e2e.test_perm_${TIMESTAMP}`,
          name: `E2E Permission ${TIMESTAMP}`,
          module: 'e2e_testing',
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.permissionId).toBeDefined();
    createdPermissionId = res.body.data.permissionId;
  });

  it('GET /api/permissions — should list permissions', async () => {
    const res = await runTest(
      'GET',
      '/api/permissions',
      'List permissions',
      200,
      () => authGet('/api/permissions'),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it('POST /api/permissions/user — should set direct user permission', async () => {
    const res = await runTest(
      'POST',
      '/api/permissions/user',
      'Set user permission override',
      201,
      () =>
        authPost('/api/permissions/user').send({
          userId: createdUserId,
          permissionId: createdPermissionId,
          isGranted: true,
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.isGranted).toBe(true);
  });

  it('GET /api/permissions/user/:userId — should get user permissions', async () => {
    const res = await runTest(
      'GET',
      `/api/permissions/user/${createdUserId}`,
      'Get user permissions',
      200,
      () => authGet(`/api/permissions/user/${createdUserId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it('DELETE /api/permissions/user/:userId/:permissionId — should remove override', async () => {
    const res = await runTest(
      'DELETE',
      `/api/permissions/user/:userId/:permissionId`,
      'Remove user permission override',
      200,
      () =>
        authDelete(
          `/api/permissions/user/${createdUserId}/${createdPermissionId}`,
        ),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });

  it('POST /api/permissions/partner-toggle — should set partner feature toggle', async () => {
    const res = await runTest(
      'POST',
      '/api/permissions/partner-toggle',
      'Set partner feature toggle',
      201,
      () =>
        authPost('/api/permissions/partner-toggle').send({
          partnerId: createdPartnerId,
          permissionId: existingPermissionId,
          isEnabled: true,
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
  });

  it('GET /api/permissions/partner-toggle/:partnerId — should get toggles', async () => {
    const res = await runTest(
      'GET',
      `/api/permissions/partner-toggle/${createdPartnerId}`,
      'Get partner feature toggles',
      200,
      () => authGet(`/api/permissions/partner-toggle/${createdPartnerId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });
});

// ============================================================
// 6. AGENTS MODULE (5 tests)
// ============================================================
describe('Agents Module (/api/agents)', () => {
  beforeAll(() => {
    currentModule = 'Agents';
  });

  it('POST /api/agents — should create a field agent', async () => {
    const res = await runTest(
      'POST',
      '/api/agents',
      'Create field agent',
      201,
      () =>
        authPost('/api/agents').send({
          partnerId: createdPartnerId,
          msisdn: `+8801${TIMESTAMP.toString().slice(-9)}`,
          subscriberName: 'E2E Test Agent',
          homeLocation: { lat: 24.8949, lng: 91.8687 },
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.agentId).toBeDefined();
    createdAgentId = res.body.data.agentId;
  });

  it('GET /api/agents — should list agents', async () => {
    const res = await runTest('GET', '/api/agents', 'List agents', 200, () =>
      authGet('/api/agents'),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.data).toBeInstanceOf(Array);
    expect(res.body.data.total).toBeGreaterThanOrEqual(1);
  });

  it('GET /api/agents/:id — should get agent by ID', async () => {
    const res = await runTest(
      'GET',
      `/api/agents/${createdAgentId}`,
      'Get agent by ID',
      200,
      () => authGet(`/api/agents/${createdAgentId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.agentId).toBe(createdAgentId);
  });

  it('PATCH /api/agents/:id — should update agent', async () => {
    const res = await runTest(
      'PATCH',
      `/api/agents/${createdAgentId}`,
      'Update agent',
      200,
      () =>
        authPatch(`/api/agents/${createdAgentId}`).send({
          subscriberName: 'E2E Agent Updated',
          status: 'inactive',
        }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.subscriberName).toBe('E2E Agent Updated');
  });

  it('DELETE /api/agents/:id — should delete agent', async () => {
    const res = await runTest(
      'DELETE',
      `/api/agents/${createdAgentId}`,
      'Delete agent',
      200,
      () => authDelete(`/api/agents/${createdAgentId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });
});

// ============================================================
// 7. API KEYS MODULE (3 tests)
// ============================================================
describe('API Keys Module (/api/api-keys)', () => {
  beforeAll(() => {
    currentModule = 'API Keys';
  });

  it('POST /api/api-keys — should create an API key', async () => {
    const res = await runTest(
      'POST',
      '/api/api-keys',
      'Create API key',
      201,
      () =>
        authPost('/api/api-keys').send({
          partnerId: createdPartnerId,
          name: `E2E Key ${TIMESTAMP}`,
          scopes: ['farms.read', 'indices.read'],
          rateLimit: 100,
        }),
    );

    expect(res.status).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.apiKey.apiKeyId).toBeDefined();
    expect(res.body.data.rawKey).toMatch(/^gis_/);
    createdApiKeyId = res.body.data.apiKey.apiKeyId;
  });

  it('GET /api/api-keys — should list API keys', async () => {
    const res = await runTest(
      'GET',
      `/api/api-keys?partnerId=${createdPartnerId}`,
      'List API keys',
      200,
      () => authGet(`/api/api-keys?partnerId=${createdPartnerId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it('DELETE /api/api-keys/:id — should revoke API key', async () => {
    const res = await runTest(
      'DELETE',
      `/api/api-keys/${createdApiKeyId}`,
      'Revoke API key',
      200,
      () => authDelete(`/api/api-keys/${createdApiKeyId}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });
});

// ============================================================
// 8. AUTH NEGATIVE CASES (8 tests)
// ============================================================
describe('Auth Negative Cases', () => {
  beforeAll(() => {
    currentModule = 'Auth Negative';
  });

  it('GET /api/auth/me — should reject request with no token', async () => {
    const res = await runNegativeTest(
      'GET',
      '/api/auth/me',
      'No token → 401',
      401,
      () => request(BASE_URL).get('/api/auth/me'),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
  });

  it('GET /api/auth/me — should reject invalid/garbage token', async () => {
    const res = await runNegativeTest(
      'GET',
      '/api/auth/me',
      'Invalid token → 401',
      401,
      () =>
        request(BASE_URL)
          .get('/api/auth/me')
          .set('Authorization', 'Bearer invalid.garbage.token'),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
  });

  it('POST /api/auth/login — should reject wrong password', async () => {
    const res = await runNegativeTest(
      'POST',
      '/api/auth/login',
      'Wrong password → 401',
      401,
      () =>
        request(BASE_URL)
          .post('/api/auth/login')
          .send({ username: 'superadmin', password: 'WrongPassword' }),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
    expect(res.body.message).toContain('Invalid credentials');
  });

  it('POST /api/auth/login — should reject non-existent username', async () => {
    const res = await runNegativeTest(
      'POST',
      '/api/auth/login',
      'Non-existent user → 401',
      401,
      () =>
        request(BASE_URL)
          .post('/api/auth/login')
          .send({ username: 'no_such_user_xyz', password: 'Password@123' }),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
    expect(res.body.message).toContain('Invalid credentials');
  });

  it('POST /api/auth/login — should reject empty body', async () => {
    const res = await runNegativeTest(
      'POST',
      '/api/auth/login',
      'Empty login body → 400',
      400,
      () => request(BASE_URL).post('/api/auth/login').send({}),
    );

    expect(res.status).toBe(400);
    expect(res.body.status).toBe('error');
  });

  it('POST /api/auth/refresh — should reject invalid refresh token', async () => {
    const res = await runNegativeTest(
      'POST',
      '/api/auth/refresh',
      'Invalid refresh token → 401',
      401,
      () =>
        request(BASE_URL)
          .post('/api/auth/refresh')
          .send({ refreshToken: 'totally_invalid_refresh_token_string' }),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
    expect(res.body.message).toContain('Invalid refresh token');
  });

  it('POST /api/auth/refresh — should reject already-revoked refresh token', async () => {
    // Login to get a token pair
    const loginRes = await request(BASE_URL)
      .post('/api/auth/login')
      .send({ username: 'superadmin', password: 'Password@123' });

    const tempAccess = loginRes.body.data.tokens.accessToken;
    const tempRefresh = loginRes.body.data.tokens.refreshToken;

    // Logout to revoke it
    await request(BASE_URL)
      .post('/api/auth/logout')
      .set('Authorization', `Bearer ${tempAccess}`)
      .send({ refreshToken: tempRefresh });

    // Now try to refresh with the revoked token
    const res = await runNegativeTest(
      'POST',
      '/api/auth/refresh',
      'Revoked refresh token → 401',
      401,
      () =>
        request(BASE_URL)
          .post('/api/auth/refresh')
          .send({ refreshToken: tempRefresh }),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
  });

  it('POST /api/auth/login — should reject deactivated user', async () => {
    // Create a user, then deactivate them
    const createRes = await authPost('/api/users').send({
      username: `e2e_deactivated_${TIMESTAMP}`,
      password: 'Password@123',
      email: `deactivated_${TIMESTAMP}@test.com`,
      fullName: 'Deactivated User',
      partnerId: createdPartnerId,
    });

    deactivatedUserId = createRes.body.data.userId;

    // Deactivate the user
    await authPatch(`/api/users/${deactivatedUserId}`).send({
      isActive: false,
    });

    // Try to login
    const res = await runNegativeTest(
      'POST',
      '/api/auth/login',
      'Deactivated user → 403',
      403,
      () =>
        request(BASE_URL)
          .post('/api/auth/login')
          .send({
            username: `e2e_deactivated_${TIMESTAMP}`,
            password: 'Password@123',
          }),
    );

    expect(res.status).toBe(403);
    expect(res.body.status).toBe('error');
    expect(res.body.message).toContain('deactivated');
  });
});

// ============================================================
// 9. TOKEN LIFECYCLE EDGE CASES (5 tests)
// ============================================================
describe('Token Lifecycle', () => {
  beforeAll(() => {
    currentModule = 'Token Lifecycle';
  });

  it('should invalidate old refresh token after rotation', async () => {
    // Login
    const loginRes = await request(BASE_URL)
      .post('/api/auth/login')
      .send({ username: 'superadmin', password: 'Password@123' });

    const oldRefresh = loginRes.body.data.tokens.refreshToken;

    // Refresh (rotates: old token revoked, new token issued)
    await request(BASE_URL)
      .post('/api/auth/refresh')
      .send({ refreshToken: oldRefresh });

    // Try using the OLD refresh token again → should fail
    const res = await runNegativeTest(
      'POST',
      '/api/auth/refresh',
      'Old token after rotation → 401',
      401,
      () =>
        request(BASE_URL)
          .post('/api/auth/refresh')
          .send({ refreshToken: oldRefresh }),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
  });

  it('should reject all refresh tokens after logout-all', async () => {
    // Login to get a fresh pair
    const loginRes = await request(BASE_URL)
      .post('/api/auth/login')
      .send({ username: 'superadmin', password: 'Password@123' });

    const tempAccess = loginRes.body.data.tokens.accessToken;
    const tempRefresh = loginRes.body.data.tokens.refreshToken;

    // Logout all
    await request(BASE_URL)
      .post('/api/auth/logout-all')
      .set('Authorization', `Bearer ${tempAccess}`);

    // Try to refresh → should fail
    const res = await runNegativeTest(
      'POST',
      '/api/auth/refresh',
      'Refresh after logout-all → 401',
      401,
      () =>
        request(BASE_URL)
          .post('/api/auth/refresh')
          .send({ refreshToken: tempRefresh }),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
  });

  it('should allow fresh login after logout-all', async () => {
    const res = await runTest(
      'POST',
      '/api/auth/login',
      'Fresh login after logout-all',
      200,
      () =>
        request(BASE_URL)
          .post('/api/auth/login')
          .send({ username: 'superadmin', password: 'Password@123' }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.tokens.accessToken).toBeDefined();

    // Restore main tokens for subsequent tests
    accessToken = res.body.data.tokens.accessToken;
    refreshToken = res.body.data.tokens.refreshToken;
  });

  it('should keep access token valid after single-token logout', async () => {
    // Login to get a separate pair
    const loginRes = await request(BASE_URL)
      .post('/api/auth/login')
      .send({ username: 'superadmin', password: 'Password@123' });

    const tempAccess = loginRes.body.data.tokens.accessToken;
    const tempRefresh = loginRes.body.data.tokens.refreshToken;

    // Logout (revokes refresh token only)
    await request(BASE_URL)
      .post('/api/auth/logout')
      .set('Authorization', `Bearer ${tempAccess}`)
      .send({ refreshToken: tempRefresh });

    // Access token should STILL work (JWT is stateless)
    const res = await runTest(
      'GET',
      '/api/auth/me',
      'Access token valid after logout',
      200,
      () =>
        request(BASE_URL)
          .get('/api/auth/me')
          .set('Authorization', `Bearer ${tempAccess}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });

  it('should fail double-refresh (second use of rotated token)', async () => {
    // Login
    const loginRes = await request(BASE_URL)
      .post('/api/auth/login')
      .send({ username: 'superadmin', password: 'Password@123' });

    const firstRefresh = loginRes.body.data.tokens.refreshToken;

    // First refresh → success
    const refreshRes = await request(BASE_URL)
      .post('/api/auth/refresh')
      .send({ refreshToken: firstRefresh });

    expect(refreshRes.status).toBe(200);

    // Second refresh with SAME token → fail (already rotated)
    const res = await runNegativeTest(
      'POST',
      '/api/auth/refresh',
      'Double refresh → 401',
      401,
      () =>
        request(BASE_URL)
          .post('/api/auth/refresh')
          .send({ refreshToken: firstRefresh }),
    );

    expect(res.status).toBe(401);
    expect(res.body.status).toBe('error');
  });
});

// ============================================================
// 10. NON-SYSTEM USER AUTH FLOW (4 tests)
// ============================================================
describe('Non-System User Auth Flow', () => {
  beforeAll(() => {
    currentModule = 'Non-System User';
  });

  it('POST /api/auth/login — should login as partner user', async () => {
    const res = await runTest(
      'POST',
      '/api/auth/login',
      'Partner user login',
      200,
      () =>
        request(BASE_URL)
          .post('/api/auth/login')
          .send({
            username: `e2e_user_${TIMESTAMP}`,
            password: 'NewPassword@456',
          }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.user.isSystemUser).toBe(false);
    expect(res.body.data.user.partnerId).toBe(createdPartnerId);

    partnerUserAccessToken = res.body.data.tokens.accessToken;
    partnerUserRefreshToken = res.body.data.tokens.refreshToken;
  });

  it('GET /api/auth/me — should show partner user profile', async () => {
    const res = await runTest(
      'GET',
      '/api/auth/me',
      'Partner user /me profile',
      200,
      () =>
        request(BASE_URL)
          .get('/api/auth/me')
          .set('Authorization', `Bearer ${partnerUserAccessToken}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.isSystemUser).toBe(false);
    expect(res.body.data.partnerId).toBe(createdPartnerId);
    expect(res.body.data.username).toBe(`e2e_user_${TIMESTAMP}`);
  });

  it('GET /api/partners — should access protected endpoint as partner user', async () => {
    const res = await runTest(
      'GET',
      '/api/partners',
      'Partner user lists partners',
      200,
      () =>
        request(BASE_URL)
          .get('/api/partners')
          .set('Authorization', `Bearer ${partnerUserAccessToken}`),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
  });

  it('POST /api/auth/refresh — should refresh token as partner user', async () => {
    const res = await runTest(
      'POST',
      '/api/auth/refresh',
      'Partner user token refresh',
      200,
      () =>
        request(BASE_URL)
          .post('/api/auth/refresh')
          .send({ refreshToken: partnerUserRefreshToken }),
    );

    expect(res.status).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.accessToken).toBeDefined();
    expect(res.body.data.refreshToken).toBeDefined();
  });
});

// ============================================================
// 11. VALIDATION & ERROR HANDLING (8 tests)
// ============================================================
describe('Validation & Error Handling', () => {
  beforeAll(() => {
    currentModule = 'Validation';
  });

  it('POST /api/users — should reject duplicate username', async () => {
    const res = await runNegativeTest(
      'POST',
      '/api/users',
      'Duplicate username → 409',
      409,
      () =>
        authPost('/api/users').send({
          username: `e2e_user_${TIMESTAMP}`,
          password: 'Password@123',
          email: `unique_dupe_${TIMESTAMP}@test.com`,
        }),
    );

    expect(res.status).toBe(409);
    expect(res.body.status).toBe('error');
  });

  it('GET /api/partners/:id — should 404 for non-existent partner', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000';
    const res = await runNegativeTest(
      'GET',
      `/api/partners/${fakeId}`,
      'Non-existent partner → 404',
      404,
      () => authGet(`/api/partners/${fakeId}`),
    );

    expect(res.status).toBe(404);
    expect(res.body.status).toBe('error');
  });

  it('GET /api/users/:id — should 404 for non-existent user', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000';
    const res = await runNegativeTest(
      'GET',
      `/api/users/${fakeId}`,
      'Non-existent user → 404',
      404,
      () => authGet(`/api/users/${fakeId}`),
    );

    expect(res.status).toBe(404);
    expect(res.body.status).toBe('error');
  });

  it('GET /api/roles/:id — should 404 for non-existent role', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000';
    const res = await runNegativeTest(
      'GET',
      `/api/roles/${fakeId}`,
      'Non-existent role → 404',
      404,
      () => authGet(`/api/roles/${fakeId}`),
    );

    expect(res.status).toBe(404);
    expect(res.body.status).toBe('error');
  });

  it('GET /api/agents/:id — should 404 for non-existent agent', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000';
    const res = await runNegativeTest(
      'GET',
      `/api/agents/${fakeId}`,
      'Non-existent agent → 404',
      404,
      () => authGet(`/api/agents/${fakeId}`),
    );

    expect(res.status).toBe(404);
    expect(res.body.status).toBe('error');
  });

  it('POST /api/roles/revoke — should fail for non-existent assignment', async () => {
    const fakeUserId = '00000000-0000-0000-0000-000000000000';
    const fakeRoleId = '00000000-0000-0000-0000-000000000001';
    const res = await runNegativeTest(
      'POST',
      '/api/roles/revoke',
      'Revoke non-existent assignment → 400',
      400,
      () =>
        authPost('/api/roles/revoke').send({
          userId: fakeUserId,
          roleId: fakeRoleId,
        }),
    );

    expect(res.status).toBe(400);
    expect(res.body.status).toBe('error');
  });

  it('POST /api/agents — should reject duplicate msisdn for same partner', async () => {
    // Create an agent first
    const msisdn = `+8802${(TIMESTAMP + 1).toString().slice(-9)}`;
    await authPost('/api/agents').send({
      partnerId: createdPartnerId,
      msisdn,
      subscriberName: 'Duplicate Test',
    });

    // Try creating another with same msisdn for same partner
    const res = await runNegativeTest(
      'POST',
      '/api/agents',
      'Duplicate agent msisdn → 409',
      409,
      () =>
        authPost('/api/agents').send({
          partnerId: createdPartnerId,
          msisdn,
          subscriberName: 'Duplicate Agent',
        }),
    );

    expect(res.status).toBe(409);
    expect(res.body.status).toBe('error');
  });

  it('DELETE /api/api-keys/:id — should 404 for non-existent key', async () => {
    const fakeId = '00000000-0000-0000-0000-000000000000';
    const res = await runNegativeTest(
      'DELETE',
      `/api/api-keys/${fakeId}`,
      'Revoke non-existent API key → 404',
      404,
      () => authDelete(`/api/api-keys/${fakeId}`),
    );

    expect(res.status).toBe(404);
    expect(res.body.status).toBe('error');
  });
});
