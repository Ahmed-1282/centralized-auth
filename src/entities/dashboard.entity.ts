import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Role } from './role.entity';
import { Permission } from './permission.entity';
import { PartnerDashboard } from './partner-dashboard.entity';

@Entity('dashboards')
export class Dashboard {
  @PrimaryGeneratedColumn('uuid', { name: 'dashboard_id' })
  dashboardId: string;

  @Column({ length: 50, unique: true })
  code: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @OneToMany(() => Role, (role) => role.dashboard)
  roles: Role[];

  @OneToMany(() => Permission, (permission) => permission.dashboard)
  permissions: Permission[];

  @OneToMany(() => PartnerDashboard, (pd) => pd.dashboard)
  partnerDashboards: PartnerDashboard[];
}
