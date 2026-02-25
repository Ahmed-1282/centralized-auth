import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Dashboard } from './dashboard.entity';
import { Role } from './role.entity';
import { UserPermission } from './user-permission.entity';
import { PartnerFeatureToggle } from './partner-feature-toggle.entity';

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn('uuid', { name: 'permission_id' })
  permissionId: string;

  @Column({ name: 'dashboard_id' })
  dashboardId: string;

  @Column({ length: 100 })
  code: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ length: 100, nullable: true })
  module: string;

  @ManyToOne(() => Dashboard, (dashboard) => dashboard.permissions)
  @JoinColumn({ name: 'dashboard_id' })
  dashboard: Dashboard;

  @ManyToMany(() => Role, (role) => role.permissions)
  roles: Role[];

  @OneToMany(() => UserPermission, (up) => up.permission)
  userPermissions: UserPermission[];

  @OneToMany(() => PartnerFeatureToggle, (pft) => pft.permission)
  partnerFeatureToggles: PartnerFeatureToggle[];
}
