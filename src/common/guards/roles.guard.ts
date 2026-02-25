import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { DASHBOARD_KEY } from '../decorators/dashboard.decorator';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { AuthenticatedUser } from '../interfaces/jwt-payload.interface';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const dashboardCode = this.reflector.getAllAndOverride<string>(
      DASHBOARD_KEY,
      [context.getHandler(), context.getClass()],
    );

    const request = context
      .switchToHttp()
      .getRequest<{ user: AuthenticatedUser }>();
    const user = request.user;
    if (!user) return false;

    // System users bypass role checks
    if (user.isSystemUser) return true;

    // Check if user has at least one of the required roles
    return user.roles.some((role) => {
      const roleMatch = requiredRoles.includes(role.roleCode);
      const dashboardMatch = dashboardCode
        ? role.dashboardCode === dashboardCode
        : true;
      return roleMatch && dashboardMatch;
    });
  }
}
