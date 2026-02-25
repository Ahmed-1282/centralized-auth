import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Agent } from './agent.entity';
import { PartnerDashboard } from './partner-dashboard.entity';
import { PartnerFeatureToggle } from './partner-feature-toggle.entity';
import { ApiKey } from './api-key.entity';

@Entity('partners_v2')
export class Partner {
  @PrimaryGeneratedColumn('uuid', { name: 'partner_id' })
  partnerId: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 100, unique: true, nullable: true })
  slug: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ name: 'contact_no', length: 50, nullable: true })
  contactNo: string;

  @Column({ length: 255, nullable: true })
  email: string;

  @Column({ name: 'logo_url', length: 500, nullable: true })
  logoUrl: string;

  @Column({ type: 'bigint', default: 0 })
  credits: number;

  @Column({ name: 'message_credits', type: 'bigint', default: 0 })
  messageCredits: number;

  @Column({ type: 'jsonb', default: {} })
  settings: Record<string, any>;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamptz' })
  deletedAt: Date;

  @OneToMany(() => User, (user) => user.partner)
  users: User[];

  @OneToMany(() => Agent, (agent) => agent.partner)
  agents: Agent[];

  @OneToMany(() => PartnerDashboard, (pd) => pd.partner)
  partnerDashboards: PartnerDashboard[];

  @OneToMany(() => PartnerFeatureToggle, (pft) => pft.partner)
  featureToggles: PartnerFeatureToggle[];

  @OneToMany(() => ApiKey, (ak) => ak.partner)
  apiKeys: ApiKey[];
}
