import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DASHBOARD_KEY } from '../decorators/dashboard.decorator';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { AuthenticatedUser } from '../interfaces/jwt-payload.interface';
import { PartnerDashboard } from '../../entities/partner-dashboard.entity';
import { Dashboard } from '../../entities/dashboard.entity';

@Injectable()
export class DashboardGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectRepository(PartnerDashboard)
    private partnerDashboardRepo: Repository<PartnerDashboard>,
    @InjectRepository(Dashboard)
    private dashboardRepo: Repository<Dashboard>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const dashboardCode = this.reflector.getAllAndOverride<string>(
      DASHBOARD_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!dashboardCode) return true; // No dashboard restriction

    const request = context
      .switchToHttp()
      .getRequest<{ user: AuthenticatedUser }>();
    const user = request.user;
    if (!user) return false;

    // System users can access all dashboards
    if (user.isSystemUser) return true;

    // User must belong to a partner
    if (!user.partnerId) return false;

    // Check if partner has access to this dashboard
    const dashboard = await this.dashboardRepo.findOne({
      where: { code: dashboardCode, isActive: true },
    });
    if (!dashboard) return false;

    const access = await this.partnerDashboardRepo.findOne({
      where: {
        partnerId: user.partnerId,
        dashboardId: dashboard.dashboardId,
        isEnabled: true,
      },
    });

    return !!access;
  }
}
