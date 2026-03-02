import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TestReportRun } from './test-report-run.entity';

@Entity('test_report_results')
export class TestReportResult {
  @PrimaryGeneratedColumn('uuid', { name: 'result_id' })
  resultId: string;

  @Column({ name: 'run_id', type: 'uuid' })
  runId: string;

  @Column({ length: 100 })
  module: string;

  @Column({ length: 10 })
  method: string;

  @Column({ length: 255 })
  endpoint: string;

  @Column({ length: 500 })
  description: string;

  @Column({ name: 'status_code', type: 'int' })
  statusCode: number;

  @Column({ name: 'expected_status', type: 'int' })
  expectedStatus: number;

  @Column({ name: 'response_status', length: 20 })
  responseStatus: string;

  @Column({ type: 'boolean' })
  passed: boolean;

  @Column({ name: 'duration_ms', type: 'int', default: 0 })
  durationMs: number;

  @Column({ name: 'error_message', type: 'text', nullable: true })
  errorMessage: string | null;

  @ManyToOne(() => TestReportRun, (run) => run.results)
  @JoinColumn({ name: 'run_id' })
  run: TestReportRun;
}
