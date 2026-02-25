import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permission } from '../../entities/permission.entity';
import { UserPermission } from '../../entities/user-permission.entity';
import { PartnerFeatureToggle } from '../../entities/partner-feature-toggle.entity';
import { Dashboard } from '../../entities/dashboard.entity';
import { CreatePermissionDto } from './dto/permission.dto';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionRepo: Repository<Permission>,
    @InjectRepository(UserPermission)
    private userPermissionRepo: Repository<UserPermission>,
    @InjectRepository(PartnerFeatureToggle)
    private featureToggleRepo: Repository<PartnerFeatureToggle>,
    @InjectRepository(Dashboard)
    private dashboardRepo: Repository<Dashboard>,
    private auditService: AuditService,
  ) {}

  async create(
    dto: CreatePermissionDto,
    createdBy?: string,
  ): Promise<Permission> {
    const dashboard = await this.dashboardRepo.findOne({
      where: { code: dto.dashboardCode },
    });
    if (!dashboard) throw new NotFoundException('Dashboard not found');

    const permission = this.permissionRepo.create({
      dashboardId: dashboard.dashboardId,
      code: dto.code,
      name: dto.name,
      description: dto.description,
      module: dto.module,
    });

    const saved = await this.permissionRepo.save(permission);

    await this.auditService.log({
      userId: createdBy,
      action: 'permission.create',
      resourceType: 'permission',
      resourceId: saved.permissionId,
      details: { code: dto.code },
    });

    return saved;
  }

  async findAll(dashboardCode?: string, module?: string): Promise<Permission[]> {
    const qb = this.permissionRepo
      .createQueryBuilder('perm')
      .leftJoinAndSelect('perm.dashboard', 'dashboard');

    if (dashboardCode) {
      qb.andWhere('dashboard.code = :dashboardCode', { dashboardCode });
    }
    if (module) {
      qb.andWhere('perm.module = :module', { module });
    }

    return qb.orderBy('dashboard.code', 'ASC').addOrderBy('perm.module', 'ASC').addOrderBy('perm.code', 'ASC').getMany();
  }

  async setUserPermission(
    userId: string,
    permissionId: string,
    isGranted: boolean,
    grantedBy?: string,
  ): Promise<UserPermission> {
    let up = await this.userPermissionRepo.findOne({
      where: { userId, permissionId },
    });

    if (up) {
      up.isGranted = isGranted;
      up.grantedBy = grantedBy ?? null;
      up.grantedAt = new Date();
    } else {
      up = this.userPermissionRepo.create({
        userId,
        permissionId,
        isGranted,
        grantedBy,
      });
    }

    const saved = await this.userPermissionRepo.save(up);

    await this.auditService.log({
      userId: grantedBy,
      action: isGranted
        ? 'permission.grant_user'
        : 'permission.deny_user',
      resourceType: 'user_permission',
      resourceId: saved.userPermissionId,
      details: { userId, permissionId, isGranted },
    });

    return saved;
  }

  async removeUserPermission(
    userId: string,
    permissionId: string,
    removedBy?: string,
  ): Promise<void> {
    await this.userPermissionRepo.delete({ userId, permissionId });

    await this.auditService.log({
      userId: removedBy,
      action: 'permission.remove_user',
      resourceType: 'user_permission',
      details: { userId, permissionId },
    });
  }

  async getUserPermissions(userId: string): Promise<UserPermission[]> {
    return this.userPermissionRepo.find({
      where: { userId },
      relations: ['permission', 'permission.dashboard'],
    });
  }

  async setPartnerFeatureToggle(
    partnerId: string,
    permissionId: string,
    isEnabled: boolean,
    updatedBy?: string,
  ): Promise<PartnerFeatureToggle> {
    let toggle = await this.featureToggleRepo.findOne({
      where: { partnerId, permissionId },
    });

    if (toggle) {
      toggle.isEnabled = isEnabled;
    } else {
      toggle = this.featureToggleRepo.create({
        partnerId,
        permissionId,
        isEnabled,
      });
    }

    const saved = await this.featureToggleRepo.save(toggle);

    await this.auditService.log({
      userId: updatedBy,
      action: 'feature_toggle.set',
      resourceType: 'partner_feature_toggle',
      details: { partnerId, permissionId, isEnabled },
    });

    return saved;
  }

  async getPartnerFeatureToggles(
    partnerId: string,
  ): Promise<PartnerFeatureToggle[]> {
    return this.featureToggleRepo.find({
      where: { partnerId },
      relations: ['permission', 'permission.dashboard'],
    });
  }
}
