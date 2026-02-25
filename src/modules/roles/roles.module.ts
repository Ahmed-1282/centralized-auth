import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Role } from '../../entities/role.entity';
import { UserRole } from '../../entities/user-role.entity';
import { Dashboard } from '../../entities/dashboard.entity';
import { Permission } from '../../entities/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, UserRole, Dashboard, Permission])],
  controllers: [RolesController],
  providers: [RolesService],
  exports: [RolesService],
})
export class RolesModule {}
