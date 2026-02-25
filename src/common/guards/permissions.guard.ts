import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import { DASHBOARD_KEY } from '../decorators/dashboard.decorator';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { AuthenticatedUser } from '../interfaces/jwt-payload.interface';
import { Role } from '../../entities/role.entity';
import { UserPermission } from '../../entities/user-permission.entity';
import { UserRole } from '../../entities/user-role.entity';
import { PartnerFeatureToggle } from '../../entities/partner-feature-toggle.entity';
import { Permission } from '../../entities/permission.entity';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectRepository(Role)
    private roleRepo: Repository<Role>,
    @InjectRepository(UserPermission)
    private userPermissionRepo: Repository<UserPermission>,
    @InjectRepository(UserRole)
    private userRoleRepo: Repository<UserRole>,
    @InjectRepository(PartnerFeatureToggle)
    private featureToggleRepo: Repository<PartnerFeatureToggle>,
    @InjectRepository(Permission)
    private permissionRepo: Repository<Permission>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredPermissions || requiredPermissions.length === 0) return true;

    const dashboardCode = this.reflector.getAllAndOverride<string>(
      DASHBOARD_KEY,
      [context.getHandler(), context.getClass()],
    );

    const request = context
      .switchToHttp()
      .getRequest<{ user: AuthenticatedUser }>();
    const user = request.user;
    if (!user) return false;

    // System users bypass permission checks
    if (user.isSystemUser) return true;

    // 1. Get user's active roles
    const userRoles = await this.userRoleRepo.find({
      where: { userId: user.userId, revokedAt: IsNull() },
      relations: ['role', 'role.permissions'],
    });

    // 2. Collect permissions from roles (filtered by dashboard if specified)
    const rolePermissionCodes = new Set<string>();
    for (const ur of userRoles) {
      if (dashboardCode && ur.role.dashboardId) {
        // Load dashboard code for the role
        const matchingRoleInJwt = user.roles.find(
          (r) =>
            r.roleCode === ur.role.code && r.dashboardCode === dashboardCode,
        );
        if (!matchingRoleInJwt) continue;
      }
      for (const perm of ur.role.permissions || []) {
        rolePermissionCodes.add(perm.code);
      }
    }

    // 3. Get direct user permission overrides
    const directPermissions = await this.userPermissionRepo.find({
      where: { userId: user.userId },
      relations: ['permission'],
    });

    const granted = new Set(rolePermissionCodes);
    for (const dp of directPermissions) {
      if (dp.isGranted) {
        granted.add(dp.permission.code);
      } else {
        granted.delete(dp.permission.code);
      }
    }

    // 4. Filter by partner feature toggles (if user has a partner)
    if (user.partnerId && dashboardCode) {
      const dashboardPermissions = await this.permissionRepo.find({
        where: { dashboard: { code: dashboardCode } },
        relations: ['dashboard'],
      });

      const toggles = await this.featureToggleRepo.find({
        where: { partnerId: user.partnerId },
      });

      // If partner has ANY toggles, only those toggled ON are allowed
      if (toggles.length > 0) {
        const enabledPermIds = new Set(
          toggles.filter((t) => t.isEnabled).map((t) => t.permissionId),
        );
        for (const dp of dashboardPermissions) {
          if (!enabledPermIds.has(dp.permissionId)) {
            granted.delete(dp.code);
          }
        }
      }
    }

    // 5. Check all required permissions are present
    return requiredPermissions.every((p) => granted.has(p));
  }
}
