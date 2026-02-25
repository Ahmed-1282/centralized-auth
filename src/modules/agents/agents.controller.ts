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
import { AgentsService } from './agents.service';
import { CreateAgentDto, UpdateAgentDto } from './dto/agent.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/interfaces/jwt-payload.interface';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@ApiTags('Agents')
@ApiBearerAuth()
@Controller('agents')
export class AgentsController {
  constructor(private agentsService: AgentsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a field agent' })
  @ResponseMessage('Agent created')
  async create(
    @Body() dto: CreateAgentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.agentsService.create(dto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'List agents' })
  @ApiQuery({ name: 'partnerId', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'offset', required: false, type: Number })
  @ResponseMessage('Agents retrieved')
  async findAll(
    @Query('partnerId') partnerId?: string,
    @Query('status') status?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.agentsService.findAll({
      partnerId,
      status,
      limit: limit ? parseInt(limit) : undefined,
      offset: offset ? parseInt(offset) : undefined,
    });
  }

  @Get(':agentId')
  @ApiOperation({ summary: 'Get agent by ID' })
  @ResponseMessage('Agent retrieved')
  async findOne(@Param('agentId') agentId: string) {
    return this.agentsService.findOne(agentId);
  }

  @Patch(':agentId')
  @ApiOperation({ summary: 'Update agent' })
  @ResponseMessage('Agent updated')
  async update(
    @Param('agentId') agentId: string,
    @Body() dto: UpdateAgentDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.agentsService.update(agentId, dto, user.userId);
  }

  @Delete(':agentId')
  @ApiOperation({ summary: 'Delete agent' })
  @ResponseMessage('Agent deleted')
  async remove(
    @Param('agentId') agentId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    await this.agentsService.remove(agentId, user.userId);
    return null;
  }
}
