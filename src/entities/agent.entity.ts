import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Partner } from './partner.entity';
import { User } from './user.entity';

@Entity('agents')
export class Agent {
  @PrimaryGeneratedColumn('uuid', { name: 'agent_id' })
  agentId: string;

  @Column({ name: 'user_id', type: 'uuid', nullable: true })
  userId: string | null;

  @Column({ name: 'partner_id' })
  partnerId: string;

  @Column({ length: 20 })
  msisdn: string;

  @Column({
    name: 'subscriber_name',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  subscriberName: string | null;

  @Column({ name: 'home_location', type: 'jsonb', nullable: true })
  homeLocation: { lat: number; lng: number } | null;

  @Column({ length: 20, default: 'active' })
  status: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;

  @OneToOne(() => User, (user) => user.agent)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Partner, (partner) => partner.agents)
  @JoinColumn({ name: 'partner_id' })
  partner: Partner;
}
