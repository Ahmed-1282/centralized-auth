import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Dashboard } from './dashboard.entity';
import { Permission } from './permission.entity';
import { UserRole } from './user-role.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid', { name: 'role_id' })
  roleId: string;

  @Column({ name: 'dashboard_id' })
  dashboardId: string;

  @Column({ length: 50 })
  code: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'is_system_role', default: true })
  isSystemRole: boolean;

  @ManyToOne(() => Dashboard, (dashboard) => dashboard.roles)
  @JoinColumn({ name: 'dashboard_id' })
  dashboard: Dashboard;

  @ManyToMany(() => Permission, (permission) => permission.roles)
  @JoinTable({
    name: 'role_permissions',
    joinColumn: { name: 'role_id', referencedColumnName: 'roleId' },
    inverseJoinColumn: {
      name: 'permission_id',
      referencedColumnName: 'permissionId',
    },
  })
  permissions: Permission[];

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[];
}
