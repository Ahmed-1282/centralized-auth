import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, ChangePasswordDto } from './dto/update-user.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/interfaces/jwt-payload.interface';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ResponseMessage('User created successfully')
  async create(
    @Body() dto: CreateUserDto,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.usersService.create(dto, currentUser.userId);
  }

  @Get()
  @ApiOperation({ summary: 'List users' })
  @ApiQuery({ name: 'partnerId', required: false })
  @ApiQuery({ name: 'isActive', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ResponseMessage('Users retrieved')
  async findAll(
    @Query('partnerId') partnerId?: string,
    @Query('isActive') isActive?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.usersService.findAll({
      partnerId,
      isActive: isActive !== undefined ? isActive === 'true' : undefined,
      limit: limit ? parseInt(limit) : undefined,
      offset: offset ? parseInt(offset) : undefined,
    });
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user by ID' })
  @ResponseMessage('User retrieved')
  async findOne(@Param('userId') userId: string) {
    return this.usersService.findOne(userId);
  }

  @Patch(':userId')
  @ApiOperation({ summary: 'Update user' })
  @ResponseMessage('User updated')
  async update(
    @Param('userId') userId: string,
    @Body() dto: UpdateUserDto,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    return this.usersService.update(userId, dto, currentUser.userId);
  }

  @Patch(':userId/password')
  @ApiOperation({ summary: 'Change user password' })
  @ResponseMessage('Password changed')
  async changePassword(
    @Param('userId') userId: string,
    @Body() dto: ChangePasswordDto,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    await this.usersService.changePassword(
      userId,
      dto.newPassword,
      currentUser.userId,
    );
    return null;
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Soft delete user' })
  @ResponseMessage('User deleted')
  async remove(
    @Param('userId') userId: string,
    @CurrentUser() currentUser: AuthenticatedUser,
  ) {
    await this.usersService.softDelete(userId, currentUser.userId);
    return null;
  }
}
