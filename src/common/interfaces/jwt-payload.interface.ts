export class JwtRolePayload {
  dashboard: string;
  roleCode: string;
}

export class JwtPayload {
  sub: string; // user_id
  username: string;
  partnerId: string | null;
  isSystemUser: boolean;
  roles: JwtRolePayload[];
}

export class AuthenticatedUser extends JwtPayload {
  userId: string; // alias for sub
}
