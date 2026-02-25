import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Permission } from './permission.entity';

@Entity('user_permissions')
export class UserPermission {
  @PrimaryGeneratedColumn('uuid', { name: 'user_permission_id' })
  userPermissionId: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'permission_id' })
  permissionId: string;

  @Column({ name: 'is_granted', default: true })
  isGranted: boolean;

  @Column({ name: 'granted_by', type: 'uuid', nullable: true })
  grantedBy: string | null;

  @Column({ name: 'granted_at', type: 'timestamptz', default: () => 'NOW()' })
  grantedAt: Date;

  @ManyToOne(() => User, (user) => user.userPermissions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Permission, (permission) => permission.userPermissions)
  @JoinColumn({ name: 'permission_id' })
  permission: Permission;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'granted_by' })
  grantedByUser: User;
}
