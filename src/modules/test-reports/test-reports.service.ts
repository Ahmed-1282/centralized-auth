import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TestReportRun } from '../../entities/test-report-run.entity';
import { TestReportResult } from '../../entities/test-report-result.entity';

@Injectable()
export class TestReportsService {
  constructor(
    @InjectRepository(TestReportRun)
    private runRepo: Repository<TestReportRun>,
    @InjectRepository(TestReportResult)
    private resultRepo: Repository<TestReportResult>,
  ) {}

  async findAll(): Promise<TestReportRun[]> {
    return this.runRepo.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(runId: string): Promise<TestReportRun> {
    const run = await this.runRepo.findOne({
      where: { runId },
      relations: ['results'],
    });
    if (!run) {
      throw new NotFoundException(`Test report run ${runId} not found`);
    }
    return run;
  }

  async findLatest(): Promise<TestReportRun> {
    const run = await this.runRepo.findOne({
      where: {},
      order: { createdAt: 'DESC' },
      relations: ['results'],
    });
    if (!run) {
      throw new NotFoundException('No test reports found');
    }
    return run;
  }

  async delete(runId: string): Promise<void> {
    const run = await this.runRepo.findOne({ where: { runId } });
    if (!run) {
      throw new NotFoundException(`Test report run ${runId} not found`);
    }
    await this.runRepo.remove(run);
  }

  buildHtml(run: TestReportRun): string {
    const { passed, failed, totalDuration, moduleSummary, results, createdAt } =
      run;
    const date = createdAt.toISOString().replace(/[:.]/g, '-').slice(0, 19);

    const methodColor: Record<string, string> = {
      GET: '#61affe',
      POST: '#49cc90',
      PATCH: '#fca130',
      PUT: '#fca130',
      DELETE: '#f93e3e',
    };

    const moduleCardsHtml = (moduleSummary || [])
      .map((s) => {
        const allPassed = s.passed === s.total;
        const bg = allPassed ? '#1b4332' : '#5c1a1a';
        const border = allPassed ? '#2d6a4f' : '#922b21';
        return `<div style="background:${bg};border:1px solid ${border};border-radius:8px;padding:12px 18px;min-width:150px">
        <div style="font-size:13px;color:#aaa">${s.name}</div>
        <div style="font-size:22px;font-weight:700;color:${allPassed ? '#49cc90' : '#f93e3e'}">${s.passed}/${s.total}</div>
        <div style="font-size:11px;color:#888">${Math.round(s.time)}ms</div>
      </div>`;
      })
      .join('\n');

    const testRowsHtml = (results || [])
      .map((r) => {
        const mc = methodColor[r.method] || '#aaa';
        const rc = r.passed ? '#49cc90' : '#f93e3e';
        const rb = r.passed ? '#1b4332' : '#5c1a1a';
        return `<tr>
        <td>${r.module}</td>
        <td><span style="background:${mc};color:#fff;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700">${r.method}</span></td>
        <td style="font-family:monospace;font-size:13px">${r.endpoint}</td>
        <td>${r.description}</td>
        <td style="text-align:center">${r.statusCode}</td>
        <td style="text-align:center">${r.expectedStatus}</td>
        <td style="text-align:center"><span style="background:${rb};color:${rc};padding:2px 10px;border-radius:4px;font-weight:700;font-size:12px">${r.passed ? 'PASS' : 'FAIL'}</span></td>
        <td style="text-align:right">${Math.round(r.durationMs)}ms</td>
        <td style="color:#f93e3e;font-size:12px">${r.errorMessage || ''}</td>
      </tr>`;
      })
      .join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>E2E Test Report — ${date}</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#0d1117;color:#c9d1d9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;padding:24px}
  h1{font-size:24px;font-weight:600;margin-bottom:4px}
  .subtitle{color:#8b949e;font-size:14px;margin-bottom:24px}
  .stats{display:flex;gap:16px;margin-bottom:24px;font-size:15px}
  .stats .total{color:#c9d1d9;font-weight:700}
  .stats .pass{color:#49cc90;font-weight:700}
  .stats .fail{color:#f93e3e;font-weight:700}
  .stats .time{color:#8b949e}
  .modules{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}
  table{width:100%;border-collapse:collapse;font-size:14px}
  th{text-align:left;padding:10px 12px;background:#161b22;border-bottom:1px solid #30363d;color:#8b949e;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.5px}
  td{padding:8px 12px;border-bottom:1px solid #21262d}
  tr:hover{background:#161b22}
  a{color:#58a6ff;text-decoration:none}
  a:hover{text-decoration:underline}
  .back{margin-bottom:20px;display:inline-block}
</style>
</head>
<body>
<a class="back" href="/api/test-reports/index">&larr; All Reports</a>
<h1>E2E Test Report</h1>
<div class="subtitle">${new Date(createdAt).toLocaleString()} &mdash; GIS Auth API</div>

<div class="stats">
  <span class="total">Total: ${passed + failed}</span>
  <span class="pass">Passed: ${passed}</span>
  <span class="fail">Failed: ${failed}</span>
  <span class="time">${Math.round(totalDuration)}ms</span>
</div>

<div class="modules">
${moduleCardsHtml}
</div>

<table>
<thead>
<tr>
  <th>Module</th><th>Method</th><th>Endpoint</th><th>Description</th>
  <th>Status</th><th>Expected</th><th>Result</th><th>Duration</th><th>Error</th>
</tr>
</thead>
<tbody>
${testRowsHtml}
</tbody>
</table>
</body>
</html>`;
  }

  buildIndexHtml(runs: TestReportRun[]): string {
    const rows = runs
      .map((run) => {
        const allPassed = run.failed === 0;
        const badge = allPassed
          ? '<span style="background:#1b4332;color:#49cc90;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700">ALL PASS</span>'
          : `<span style="background:#5c1a1a;color:#f93e3e;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:700">${run.failed} FAILED</span>`;
        return `<tr>
        <td><a href="/api/test-reports/${run.runId}/html">${new Date(run.createdAt).toLocaleString()}</a></td>
        <td>${run.totalTests}</td>
        <td style="color:#49cc90">${run.passed}</td>
        <td style="color:#f93e3e">${run.failed}</td>
        <td>${Math.round(run.totalDuration)}ms</td>
        <td>${badge}</td>
      </tr>`;
      })
      .join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>E2E Test Reports — GIS Auth</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#0d1117;color:#c9d1d9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;padding:24px}
  h1{font-size:24px;font-weight:600;margin-bottom:4px}
  .subtitle{color:#8b949e;font-size:14px;margin-bottom:24px}
  table{width:100%;max-width:900px;border-collapse:collapse;font-size:14px}
  th{text-align:left;padding:10px 12px;background:#161b22;border-bottom:1px solid #30363d;color:#8b949e;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.5px}
  td{padding:10px 12px;border-bottom:1px solid #21262d}
  tr:hover{background:#161b22}
  a{color:#58a6ff;text-decoration:none}
  a:hover{text-decoration:underline}
</style>
</head>
<body>
<h1>E2E Test Reports</h1>
<div class="subtitle">GIS Auth API &mdash; ${runs.length} run(s)</div>
<table>
<thead><tr><th>Date</th><th>Total</th><th>Passed</th><th>Failed</th><th>Duration</th><th>Status</th></tr></thead>
<tbody>
${rows}
</tbody>
</table>
</body>
</html>`;
  }
}
