import { Controller, Post, Get, Body, Req, HttpCode } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import type { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { Public } from '../../common/decorators/public.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/interfaces/jwt-payload.interface';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'Login with username and password' })
  @ResponseMessage('Login successful')
  async login(@Body() dto: LoginDto, @Req() req: Request) {
    return this.authService.login(
      dto.username,
      dto.password,
      req.ip,
      req.headers['user-agent'],
    );
  }

  @Public()
  @Post('refresh')
  @HttpCode(200)
  @ApiOperation({ summary: 'Refresh access token' })
  @ResponseMessage('Token refreshed')
  async refresh(@Body() dto: RefreshTokenDto, @Req() req: Request) {
    return this.authService.refresh(dto.refreshToken, req.ip);
  }

  @Post('logout')
  @HttpCode(200)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout (revoke refresh token)' })
  @ResponseMessage('Logged out successfully')
  async logout(
    @Body() dto: RefreshTokenDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    await this.authService.logout(dto.refreshToken, user.userId);
    return null;
  }

  @Post('logout-all')
  @HttpCode(200)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout from all devices' })
  @ResponseMessage('Logged out from all devices')
  async logoutAll(@CurrentUser() user: AuthenticatedUser) {
    await this.authService.logoutAll(user.userId);
    return null;
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get current user profile' })
  @ResponseMessage('Profile retrieved')
  async me(@CurrentUser() user: AuthenticatedUser) {
    return this.authService.getProfile(user.userId);
  }
}
