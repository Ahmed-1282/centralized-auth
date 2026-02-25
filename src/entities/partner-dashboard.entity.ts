import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Partner } from './partner.entity';
import { Dashboard } from './dashboard.entity';
import { User } from './user.entity';

@Entity('partner_dashboards')
export class PartnerDashboard {
  @PrimaryColumn({ name: 'partner_id' })
  partnerId: string;

  @PrimaryColumn({ name: 'dashboard_id' })
  dashboardId: string;

  @Column({ name: 'is_enabled', default: true })
  isEnabled: boolean;

  @Column({ name: 'enabled_at', type: 'timestamptz', default: () => 'NOW()' })
  enabledAt: Date;

  @Column({ name: 'enabled_by', nullable: true })
  enabledBy: string | null;

  @Column({ type: 'jsonb', default: {} })
  config: Record<string, any>;

  @ManyToOne(() => Partner, (partner) => partner.partnerDashboards)
  @JoinColumn({ name: 'partner_id' })
  partner: Partner;

  @ManyToOne(() => Dashboard, (dashboard) => dashboard.partnerDashboards)
  @JoinColumn({ name: 'dashboard_id' })
  dashboard: Dashboard;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'enabled_by' })
  enabledByUser: User;
}
