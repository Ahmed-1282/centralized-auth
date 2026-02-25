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
import { ApiTags, ApiOperation, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { PartnersService } from './partners.service';
import {
  CreatePartnerDto,
  UpdatePartnerDto,
  ToggleDashboardAccessDto,
} from './dto/create-partner.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/interfaces/jwt-payload.interface';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@ApiTags('Partners')
@ApiBearerAuth()
@Controller('partners')
export class PartnersController {
  constructor(private partnersService: PartnersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new partner' })
  @ResponseMessage('Partner created')
  async create(
    @Body() dto: CreatePartnerDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.partnersService.create(dto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'List partners' })
  @ApiQuery({ name: 'isActive', required: false, type: Boolean })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ResponseMessage('Partners retrieved')
  async findAll(
    @Query('isActive') isActive?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.partnersService.findAll({
      isActive: isActive !== undefined ? isActive === 'true' : undefined,
      limit: limit ? parseInt(limit) : undefined,
      offset: offset ? parseInt(offset) : undefined,
    });
  }

  @Get(':partnerId')
  @ApiOperation({ summary: 'Get partner by ID' })
  @ResponseMessage('Partner retrieved')
  async findOne(@Param('partnerId') partnerId: string) {
    return this.partnersService.findOne(partnerId);
  }

  @Patch(':partnerId')
  @ApiOperation({ summary: 'Update partner' })
  @ResponseMessage('Partner updated')
  async update(
    @Param('partnerId') partnerId: string,
    @Body() dto: UpdatePartnerDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.partnersService.update(partnerId, dto, user.userId);
  }

  @Post(':partnerId/dashboards')
  @ApiOperation({ summary: 'Toggle dashboard access for partner' })
  @ResponseMessage('Dashboard access updated')
  async toggleDashboardAccess(
    @Param('partnerId') partnerId: string,
    @Body() dto: ToggleDashboardAccessDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.partnersService.toggleDashboardAccess(
      partnerId,
      dto.dashboardCode,
      dto.isEnabled,
      user.userId,
    );
  }

  @Get(':partnerId/dashboards')
  @ApiOperation({ summary: 'Get partner dashboard access' })
  @ResponseMessage('Dashboard access retrieved')
  async getDashboardAccess(@Param('partnerId') partnerId: string) {
    return this.partnersService.getDashboardAccess(partnerId);
  }

  @Delete(':partnerId')
  @ApiOperation({ summary: 'Soft delete partner' })
  @ResponseMessage('Partner deleted')
  async remove(
    @Param('partnerId') partnerId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    await this.partnersService.softDelete(partnerId, user.userId);
    return null;
  }
}
