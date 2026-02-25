import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { PermissionsService } from './permissions.service';
import {
  CreatePermissionDto,
  SetUserPermissionDto,
  SetPartnerFeatureToggleDto,
} from './dto/permission.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/interfaces/jwt-payload.interface';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@ApiTags('Permissions')
@ApiBearerAuth()
@Controller('permissions')
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a permission' })
  @ResponseMessage('Permission created')
  async create(
    @Body() dto: CreatePermissionDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.permissionsService.create(dto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'List permissions' })
  @ApiQuery({ name: 'dashboardCode', required: false })
  @ApiQuery({ name: 'module', required: false })
  @ResponseMessage('Permissions retrieved')
  async findAll(
    @Query('dashboardCode') dashboardCode?: string,
    @Query('module') module?: string,
  ) {
    return this.permissionsService.findAll(dashboardCode, module);
  }

  @Post('user')
  @ApiOperation({ summary: 'Set direct user permission (grant/deny)' })
  @ResponseMessage('User permission set')
  async setUserPermission(
    @Body() dto: SetUserPermissionDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.permissionsService.setUserPermission(
      dto.userId,
      dto.permissionId,
      dto.isGranted,
      user.userId,
    );
  }

  @Delete('user/:userId/:permissionId')
  @ApiOperation({ summary: 'Remove direct user permission override' })
  @ResponseMessage('User permission removed')
  async removeUserPermission(
    @Param('userId') userId: string,
    @Param('permissionId') permissionId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    await this.permissionsService.removeUserPermission(
      userId,
      permissionId,
      user.userId,
    );
    return null;
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get direct permissions for a user' })
  @ResponseMessage('User permissions retrieved')
  async getUserPermissions(@Param('userId') userId: string) {
    return this.permissionsService.getUserPermissions(userId);
  }

  @Post('partner-toggle')
  @ApiOperation({ summary: 'Set partner feature toggle' })
  @ResponseMessage('Feature toggle updated')
  async setFeatureToggle(
    @Body() dto: SetPartnerFeatureToggleDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.permissionsService.setPartnerFeatureToggle(
      dto.partnerId,
      dto.permissionId,
      dto.isEnabled,
      user.userId,
    );
  }

  @Get('partner-toggle/:partnerId')
  @ApiOperation({ summary: 'Get partner feature toggles' })
  @ResponseMessage('Feature toggles retrieved')
  async getPartnerToggles(@Param('partnerId') partnerId: string) {
    return this.permissionsService.getPartnerFeatureToggles(partnerId);
  }
}
