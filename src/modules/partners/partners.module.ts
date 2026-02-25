import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnersController } from './partners.controller';
import { PartnersService } from './partners.service';
import { Partner } from '../../entities/partner.entity';
import { PartnerDashboard } from '../../entities/partner-dashboard.entity';
import { Dashboard } from '../../entities/dashboard.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partner, PartnerDashboard, Dashboard])],
  controllers: [PartnersController],
  providers: [PartnersService],
  exports: [PartnersService],
})
export class PartnersModule {}
