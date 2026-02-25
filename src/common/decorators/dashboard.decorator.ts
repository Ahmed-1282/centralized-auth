import { SetMetadata } from '@nestjs/common';

export const DASHBOARD_KEY = 'dashboard';

/**
 * Specifies which dashboard this endpoint belongs to.
 * Used by DashboardGuard and RolesGuard.
 *
 * Usage: @Dashboard('crop_monitoring')
 */
export const Dashboard = (dashboardCode: string) =>
  SetMetadata(DASHBOARD_KEY, dashboardCode);
