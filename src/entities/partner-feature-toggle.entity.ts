import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Partner } from './partner.entity';
import { Permission } from './permission.entity';

@Entity('partner_feature_toggles')
export class PartnerFeatureToggle {
  @PrimaryColumn({ name: 'partner_id' })
  partnerId: string;

  @PrimaryColumn({ name: 'permission_id' })
  permissionId: string;

  @Column({ name: 'is_enabled', default: true })
  isEnabled: boolean;

  @ManyToOne(() => Partner, (partner) => partner.featureToggles)
  @JoinColumn({ name: 'partner_id' })
  partner: Partner;

  @ManyToOne(() => Permission, (permission) => permission.partnerFeatureToggles)
  @JoinColumn({ name: 'permission_id' })
  permission: Permission;
}
