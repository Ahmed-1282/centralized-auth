import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiQuery,
} from '@nestjs/swagger';
import { RolesService } from './roles.service';
import {
  CreateRoleDto,
  AssignRoleDto,
  RevokeRoleDto,
  SetRolePermissionsDto,
} from './dto/role.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/interfaces/jwt-payload.interface';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@ApiTags('Roles')
@ApiBearerAuth()
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a custom role' })
  @ResponseMessage('Role created')
  async create(
    @Body() dto: CreateRoleDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rolesService.create(dto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'List roles' })
  @ApiQuery({ name: 'dashboardCode', required: false })
  @ResponseMessage('Roles retrieved')
  async findAll(@Query('dashboardCode') dashboardCode?: string) {
    return this.rolesService.findAll(dashboardCode);
  }

  @Get(':roleId')
  @ApiOperation({ summary: 'Get role with permissions' })
  @ResponseMessage('Role retrieved')
  async findOne(@Param('roleId') roleId: string) {
    return this.rolesService.findOne(roleId);
  }

  @Patch(':roleId/permissions')
  @ApiOperation({ summary: 'Set permissions for a role' })
  @ResponseMessage('Role permissions updated')
  async setPermissions(
    @Param('roleId') roleId: string,
    @Body() dto: SetRolePermissionsDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rolesService.setPermissions(
      roleId,
      dto.permissionIds,
      user.userId,
    );
  }

  @Post('assign')
  @ApiOperation({ summary: 'Assign a role to a user' })
  @ResponseMessage('Role assigned')
  async assign(
    @Body() dto: AssignRoleDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.rolesService.assignToUser(dto.userId, dto.roleId, user.userId);
  }

  @Post('revoke')
  @ApiOperation({ summary: 'Revoke a role from a user' })
  @ResponseMessage('Role revoked')
  async revoke(
    @Body() dto: RevokeRoleDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    await this.rolesService.revokeFromUser(dto.userId, dto.roleId, user.userId);
    return null;
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Get all roles for a user' })
  @ResponseMessage('User roles retrieved')
  async getUserRoles(@Param('userId') userId: string) {
    return this.rolesService.getUserRoles(userId);
  }
}
