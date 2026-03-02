import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { TestReportResult } from './test-report-result.entity';

@Entity('test_report_runs')
export class TestReportRun {
  @PrimaryGeneratedColumn('uuid', { name: 'run_id' })
  runId: string;

  @Column({ name: 'total_tests', type: 'int', default: 0 })
  totalTests: number;

  @Column({ type: 'int', default: 0 })
  passed: number;

  @Column({ type: 'int', default: 0 })
  failed: number;

  @Column({ name: 'total_duration', type: 'int', default: 0 })
  totalDuration: number;

  @Column({ name: 'module_summary', type: 'jsonb', default: [] })
  moduleSummary: Array<{
    name: string;
    passed: number;
    total: number;
    time: number;
  }>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @OneToMany(() => TestReportResult, (result) => result.run)
  results: TestReportResult[];
}
