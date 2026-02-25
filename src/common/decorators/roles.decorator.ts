import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

/**
 * Requires the user to have at least ONE of the specified roles
 * on the dashboard specified by @Dashboard().
 *
 * Usage: @Roles('system_admin', 'partner_admin')
 */
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
