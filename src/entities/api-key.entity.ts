import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Partner } from './partner.entity';
import { User } from './user.entity';

@Entity('api_keys')
export class ApiKey {
  @PrimaryGeneratedColumn('uuid', { name: 'api_key_id' })
  apiKeyId: string;

  @Column({ name: 'partner_id' })
  partnerId: string;

  @Column({ name: 'key_hash', length: 255 })
  keyHash: string;

  @Column({ name: 'key_prefix', length: 12 })
  keyPrefix: string;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'text', array: true, default: () => "ARRAY[]::text[]" })
  scopes: string[];

  @Column({ name: 'rate_limit', default: 60 })
  rateLimit: number;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ name: 'expires_at', type: 'timestamptz', nullable: true })
  expiresAt: Date | null;

  @Column({ name: 'last_used_at', type: 'timestamptz', nullable: true })
  lastUsedAt: Date;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @ManyToOne(() => Partner, (partner) => partner.apiKeys)
  @JoinColumn({ name: 'partner_id' })
  partner: Partner;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  createdByUser: User;
}
