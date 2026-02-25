import {
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { User } from '../../entities/user.entity';
import { RefreshToken } from '../../entities/refresh-token.entity';
import { UserRole } from '../../entities/user-role.entity';
import { JwtPayload } from '../../common/interfaces/jwt-payload.interface';
import { AuditService } from '../audit/audit.service';
import {
  LoginResponseDto,
  AuthTokensDto,
  UserProfileDto,
} from './dto/auth-response.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(RefreshToken)
    private refreshTokenRepo: Repository<RefreshToken>,
    @InjectRepository(UserRole)
    private userRoleRepo: Repository<UserRole>,
    private jwtService: JwtService,
    private configService: ConfigService,
    private auditService: AuditService,
  ) {}

  async login(
    username: string,
    password: string,
    ipAddress?: string,
    userAgent?: string,
  ): Promise<LoginResponseDto> {
    const user = await this.userRepo.findOne({
      where: { username, deletedAt: IsNull() },
      relations: ['partner'],
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.isActive) {
      throw new ForbiddenException('Account is deactivated');
    }

    const passwordValid = await bcrypt.compare(password, user.passwordHash);
    if (!passwordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Load user roles with dashboard info
    const userRoles = await this.userRoleRepo.find({
      where: { userId: user.userId, revokedAt: IsNull() },
      relations: ['role', 'role.dashboard'],
    });

    const roles = userRoles.map((ur) => ({
      dashboardCode: ur.role.dashboard.code,
      roleCode: ur.role.code,
      roleName: ur.role.name,
    }));

    // Generate tokens
    const tokens = await this.generateTokens(user, roles);

    // Store refresh token
    const refreshTokenHash = await bcrypt.hash(tokens.refreshToken, 10);
    const refreshTtl = this.configService.get<number>(
      'JWT_REFRESH_TTL',
      604800,
    );

    await this.refreshTokenRepo.save(
      this.refreshTokenRepo.create({
        userId: user.userId,
        tokenHash: refreshTokenHash,
        ipAddress,
        deviceInfo: userAgent ? { userAgent } : null,
        expiresAt: new Date(Date.now() + refreshTtl * 1000),
      }),
    );

    // Update last login
    await this.userRepo.update(user.userId, { lastLoginAt: new Date() });

    // Audit
    await this.auditService.log({
      userId: user.userId,
      action: 'user.login',
      resourceType: 'user',
      resourceId: user.userId,
      ipAddress,
      userAgent,
    });

    const profile: UserProfileDto = {
      userId: user.userId,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      isSystemUser: user.isSystemUser,
      partnerId: user.partnerId,
      partnerName: user.partner?.name || null,
      roles,
    };

    return { tokens, user: profile };
  }

  async refresh(
    refreshToken: string,
    ipAddress?: string,
  ): Promise<AuthTokensDto> {
    // Find all non-revoked, non-expired tokens
    const storedTokens = await this.refreshTokenRepo.find({
      where: { revokedAt: IsNull() },
      relations: ['user'],
    });

    let matchedToken: RefreshToken | null = null;
    for (const st of storedTokens) {
      if (new Date() > st.expiresAt) continue;
      const isMatch = await bcrypt.compare(refreshToken, st.tokenHash);
      if (isMatch) {
        matchedToken = st;
        break;
      }
    }

    if (!matchedToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.userRepo.findOne({
      where: { userId: matchedToken.userId, deletedAt: IsNull() },
      relations: ['partner'],
    });

    if (!user || !user.isActive) {
      // Revoke the token if user is gone/inactive
      await this.refreshTokenRepo.update(matchedToken.tokenId, {
        revokedAt: new Date(),
      });
      throw new UnauthorizedException('User account unavailable');
    }

    // Revoke old token (rotation)
    await this.refreshTokenRepo.update(matchedToken.tokenId, {
      revokedAt: new Date(),
    });

    // Load roles
    const userRoles = await this.userRoleRepo.find({
      where: { userId: user.userId, revokedAt: IsNull() },
      relations: ['role', 'role.dashboard'],
    });

    const roles = userRoles.map((ur) => ({
      dashboardCode: ur.role.dashboard.code,
      roleCode: ur.role.code,
      roleName: ur.role.name,
    }));

    // Generate new token pair
    const tokens = await this.generateTokens(user, roles);

    // Store new refresh token
    const refreshTokenHash = await bcrypt.hash(tokens.refreshToken, 10);
    const refreshTtl = this.configService.get<number>(
      'JWT_REFRESH_TTL',
      604800,
    );

    await this.refreshTokenRepo.save(
      this.refreshTokenRepo.create({
        userId: user.userId,
        tokenHash: refreshTokenHash,
        ipAddress,
        expiresAt: new Date(Date.now() + refreshTtl * 1000),
      }),
    );

    return tokens;
  }

  async logout(refreshToken: string, userId: string): Promise<void> {
    const storedTokens = await this.refreshTokenRepo.find({
      where: { userId, revokedAt: IsNull() },
    });

    for (const st of storedTokens) {
      const isMatch = await bcrypt.compare(refreshToken, st.tokenHash);
      if (isMatch) {
        await this.refreshTokenRepo.update(st.tokenId, {
          revokedAt: new Date(),
        });
        break;
      }
    }

    await this.auditService.log({
      userId,
      action: 'user.logout',
      resourceType: 'user',
      resourceId: userId,
    });
  }

  async logoutAll(userId: string): Promise<void> {
    await this.refreshTokenRepo.update(
      { userId, revokedAt: IsNull() },
      { revokedAt: new Date() },
    );

    await this.auditService.log({
      userId,
      action: 'user.logout_all',
      resourceType: 'user',
      resourceId: userId,
    });
  }

  async getProfile(userId: string): Promise<UserProfileDto> {
    const user = await this.userRepo.findOne({
      where: { userId, deletedAt: IsNull() },
      relations: ['partner'],
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    const userRoles = await this.userRoleRepo.find({
      where: { userId, revokedAt: IsNull() },
      relations: ['role', 'role.dashboard'],
    });

    return {
      userId: user.userId,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      isSystemUser: user.isSystemUser,
      partnerId: user.partnerId,
      partnerName: user.partner?.name || null,
      roles: userRoles.map((ur) => ({
        dashboardCode: ur.role.dashboard.code,
        roleCode: ur.role.code,
        roleName: ur.role.name,
      })),
    };
  }

  private async generateTokens(
    user: User,
    roles: { dashboardCode: string; roleCode: string }[],
  ): Promise<AuthTokensDto> {
    const payload: JwtPayload = {
      sub: user.userId,
      username: user.username,
      partnerId: user.partnerId || null,
      isSystemUser: user.isSystemUser,
      roles: roles.map((r) => ({
        dashboardCode: r.dashboardCode,
        roleCode: r.roleCode,
      })),
    };

    const accessTtl = this.configService.get<number>('JWT_ACCESS_TTL', 900);
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: accessTtl,
    });

    const refreshToken = randomBytes(40).toString('hex');

    return { accessToken, refreshToken };
  }
}
