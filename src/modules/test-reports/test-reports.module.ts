import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestReportsController } from './test-reports.controller';
import { TestReportsService } from './test-reports.service';
import { TestReportRun } from '../../entities/test-report-run.entity';
import { TestReportResult } from '../../entities/test-report-result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TestReportRun, TestReportResult])],
  controllers: [TestReportsController],
  providers: [TestReportsService],
  exports: [TestReportsService],
})
export class TestReportsModule {}
