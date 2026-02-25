import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { Permission } from '../../entities/permission.entity';
import { UserPermission } from '../../entities/user-permission.entity';
import { PartnerFeatureToggle } from '../../entities/partner-feature-toggle.entity';
import { Dashboard } from '../../entities/dashboard.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Permission,
      UserPermission,
      PartnerFeatureToggle,
      Dashboard,
    ]),
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService],
  exports: [PermissionsService],
})
export class PermissionsModule {}
