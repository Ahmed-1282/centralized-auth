import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull, In } from 'typeorm';
import { Role } from '../../entities/role.entity';
import { UserRole } from '../../entities/user-role.entity';
import { Dashboard } from '../../entities/dashboard.entity';
import { Permission } from '../../entities/permission.entity';
import { CreateRoleDto } from './dto/role.dto';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepo: Repository<Role>,
    @InjectRepository(UserRole)
    private userRoleRepo: Repository<UserRole>,
    @InjectRepository(Dashboard)
    private dashboardRepo: Repository<Dashboard>,
    @InjectRepository(Permission)
    private permissionRepo: Repository<Permission>,
    private auditService: AuditService,
  ) {}

  async create(dto: CreateRoleDto, createdBy?: string): Promise<Role> {
    const dashboard = await this.dashboardRepo.findOne({
      where: { code: dto.dashboardCode },
    });
    if (!dashboard) throw new NotFoundException('Dashboard not found');

    const role = this.roleRepo.create({
      dashboardId: dashboard.dashboardId,
      code: dto.code,
      name: dto.name,
      description: dto.description,
      isSystemRole: false,
    });

    const saved = await this.roleRepo.save(role);

    await this.auditService.log({
      userId: createdBy,
      action: 'role.create',
      resourceType: 'role',
      resourceId: saved.roleId,
      details: { code: dto.code, dashboardCode: dto.dashboardCode },
    });

    return saved;
  }

  async findAll(dashboardCode?: string): Promise<Role[]> {
    const qb = this.roleRepo
      .createQueryBuilder('role')
      .leftJoinAndSelect('role.dashboard', 'dashboard');

    if (dashboardCode) {
      qb.andWhere('dashboard.code = :dashboardCode', { dashboardCode });
    }

    qb.orderBy('dashboard.code', 'ASC').addOrderBy('role.code', 'ASC');
    return qb.getMany();
  }

  async findOne(roleId: string): Promise<Role> {
    const role = await this.roleRepo.findOne({
      where: { roleId },
      relations: ['dashboard', 'permissions'],
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  async setPermissions(
    roleId: string,
    permissionIds: string[],
    updatedBy?: string,
  ): Promise<Role> {
    const role = await this.roleRepo.findOne({
      where: { roleId },
      relations: ['permissions'],
    });
    if (!role) throw new NotFoundException('Role not found');

    const permissions = await this.permissionRepo.find({
      where: { permissionId: In(permissionIds) },
    });

    role.permissions = permissions;
    const saved = await this.roleRepo.save(role);

    await this.auditService.log({
      userId: updatedBy,
      action: 'role.set_permissions',
      resourceType: 'role',
      resourceId: roleId,
      details: { permissionIds },
    });

    return saved;
  }

  async assignToUser(
    userId: string,
    roleId: string,
    grantedBy?: string,
  ): Promise<UserRole> {
    // Check if already assigned and not revoked
    const existing = await this.userRoleRepo.findOne({
      where: { userId, roleId, revokedAt: IsNull() },
    });
    if (existing) return existing;

    const userRole = this.userRoleRepo.create({
      userId,
      roleId,
      grantedBy,
    });

    const saved = await this.userRoleRepo.save(userRole);

    await this.auditService.log({
      userId: grantedBy,
      action: 'role.assign',
      resourceType: 'user_role',
      resourceId: saved.userRoleId,
      details: { userId, roleId },
    });

    return saved;
  }

  async revokeFromUser(
    userId: string,
    roleId: string,
    revokedBy?: string,
  ): Promise<void> {
    const userRole = await this.userRoleRepo.findOne({
      where: { userId, roleId, revokedAt: IsNull() },
    });
    if (!userRole) throw new NotFoundException('Role assignment not found');

    await this.userRoleRepo.update(userRole.userRoleId, {
      revokedAt: new Date(),
    });

    await this.auditService.log({
      userId: revokedBy,
      action: 'role.revoke',
      resourceType: 'user_role',
      resourceId: userRole.userRoleId,
      details: { userId, roleId },
    });
  }

  async getUserRoles(userId: string): Promise<UserRole[]> {
    return this.userRoleRepo.find({
      where: { userId, revokedAt: IsNull() },
      relations: ['role', 'role.dashboard', 'role.permissions'],
    });
  }
}
