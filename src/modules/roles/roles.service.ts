import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Role } from '../../entities/role.entity';
import { UserRole } from '../../entities/user-role.entity';
import { CreateRoleDto } from './dto/role.dto';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepo: Repository<Role>,
    @InjectRepository(UserRole)
    private userRoleRepo: Repository<UserRole>,
    private auditService: AuditService,
  ) {}

  async create(dto: CreateRoleDto, createdBy?: string): Promise<Role> {
    const role = this.roleRepo.create({
      dashboard: dto.dashboard,
      code: dto.code,
      name: dto.name,
      description: dto.description,
      permissions: dto.permissions ?? {},
      isSystemRole: false,
    });

    const saved = await this.roleRepo.save(role);

    await this.auditService.log({
      userId: createdBy,
      action: 'role.create',
      resourceType: 'role',
      resourceId: saved.roleId,
      details: { code: dto.code, dashboard: dto.dashboard },
    });

    return saved;
  }

  async findAll(dashboard?: string): Promise<Role[]> {
    const qb = this.roleRepo.createQueryBuilder('role');

    if (dashboard) {
      qb.andWhere('role.dashboard = :dashboard', { dashboard });
    }

    qb.orderBy('role.dashboard', 'ASC').addOrderBy('role.code', 'ASC');
    return qb.getMany();
  }

  async findOne(roleId: string): Promise<Role> {
    const role = await this.roleRepo.findOne({
      where: { roleId },
    });
    if (!role) throw new NotFoundException('Role not found');
    return role;
  }

  async updatePermissions(
    roleId: string,
    permissions: Record<string, any>,
    updatedBy?: string,
  ): Promise<Role> {
    const role = await this.findOne(roleId);
    role.permissions = permissions;
    const saved = await this.roleRepo.save(role);

    await this.auditService.log({
      userId: updatedBy,
      action: 'role.update_permissions',
      resourceType: 'role',
      resourceId: roleId,
      details: { permissions },
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
      grantedBy: grantedBy ?? null,
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
      relations: ['role'],
    });
  }
}
