import { Controller, Get, Delete, Param, Res } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import * as express from 'express';
import { TestReportsService } from './test-reports.service';
import { Public } from '../../common/decorators/public.decorator';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@ApiTags('Test Reports')
@Controller('test-reports')
export class TestReportsController {
  constructor(private testReportsService: TestReportsService) {}

  @Get()
  @Public()
  @ApiOperation({ summary: 'List all test report runs' })
  @ResponseMessage('Test reports retrieved')
  async findAll() {
    return this.testReportsService.findAll();
  }

  @Get('latest/html')
  @Public()
  @ApiOperation({ summary: 'Get latest test report as styled HTML page' })
  async latestHtml(@Res() res: express.Response) {
    const run = await this.testReportsService.findLatest();
    const html = this.testReportsService.buildHtml(run);
    res.type('html').send(html);
  }

  @Get('index')
  @Public()
  @ApiOperation({ summary: 'Get index page listing all test runs as HTML' })
  async indexHtml(@Res() res: express.Response) {
    const runs = await this.testReportsService.findAll();
    const html = this.testReportsService.buildIndexHtml(runs);
    res.type('html').send(html);
  }

  @Get(':runId')
  @Public()
  @ApiOperation({ summary: 'Get a specific test report run with all results' })
  @ResponseMessage('Test report retrieved')
  async findOne(@Param('runId') runId: string) {
    return this.testReportsService.findOne(runId);
  }

  @Get(':runId/html')
  @Public()
  @ApiOperation({ summary: 'Get a specific test report as styled HTML page' })
  async runHtml(@Param('runId') runId: string, @Res() res: express.Response) {
    const run = await this.testReportsService.findOne(runId);
    const html = this.testReportsService.buildHtml(run);
    res.type('html').send(html);
  }

  @Delete(':runId')
  @ApiOperation({ summary: 'Delete a test report run' })
  @ResponseMessage('Test report deleted')
  async remove(@Param('runId') runId: string) {
    await this.testReportsService.delete(runId);
    return null;
  }
}
