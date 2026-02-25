import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Role } from './role.entity';

@Entity('user_roles')
export class UserRole {
  @PrimaryGeneratedColumn('uuid', { name: 'user_role_id' })
  userRoleId: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'role_id' })
  roleId: string;

  @Column({ name: 'granted_by', nullable: true })
  grantedBy: string;

  @Column({ name: 'granted_at', type: 'timestamptz', default: () => 'NOW()' })
  grantedAt: Date;

  @Column({ name: 'revoked_at', type: 'timestamptz', nullable: true })
  revokedAt: Date;

  @ManyToOne(() => User, (user) => user.userRoles)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Role, (role) => role.userRoles)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'granted_by' })
  grantedByUser: User;
}
