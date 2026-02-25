import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Partner } from './partner.entity';
import { UserRole } from './user-role.entity';
import { UserPermission } from './user-permission.entity';
import { RefreshToken } from './refresh-token.entity';
import { Agent } from './agent.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  userId: string;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ length: 255, unique: true, nullable: true })
  email: string;

  @Column({ name: 'password_hash', length: 255 })
  passwordHash: string;

  @Column({ name: 'full_name', length: 255, nullable: true })
  fullName: string;

  @Column({ length: 50, nullable: true })
  phone: string;

  @Column({ name: 'avatar_url', length: 500, nullable: true })
  avatarUrl: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'is_system_user', default: false })
  isSystemUser: boolean;

  @Column({ name: 'partner_id', nullable: true })
  partnerId: string | null;

  @Column({ name: 'last_login_at', type: 'timestamptz', nullable: true })
  lastLoginAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
  deletedAt: Date;

  @ManyToOne(() => Partner, (partner) => partner.users)
  @JoinColumn({ name: 'partner_id' })
  partner: Partner;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];

  @OneToMany(() => UserPermission, (up) => up.user)
  userPermissions: UserPermission[];

  @OneToMany(() => RefreshToken, (rt) => rt.user)
  refreshTokens: RefreshToken[];

  @OneToOne(() => Agent, (agent) => agent.user)
  agent: Agent;
}
