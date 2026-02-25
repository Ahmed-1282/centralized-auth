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

@Entity('partners')
export class Partner {
  @PrimaryGeneratedColumn('uuid', { name: 'partner_id' })
  partnerId: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: true })
  slug: string | null;

  @Column({ type: 'text', nullable: true })
  address: string | null;

  @Column({ name: 'contact_no', type: 'varchar', length: 50, nullable: true })
  contactNo: string | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string | null;

  @Column({ name: 'logo_url', type: 'varchar', length: 500, nullable: true })
  logoUrl: string | null;

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
  deletedAt: Date | null;

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
