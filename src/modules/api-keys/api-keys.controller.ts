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
import { ApiKeysService } from './api-keys.service';
import { CreateApiKeyDto } from './dto/api-key.dto';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { AuthenticatedUser } from '../../common/interfaces/jwt-payload.interface';
import { ResponseMessage } from '../../common/decorators/response-message.decorator';

@ApiTags('API Keys')
@ApiBearerAuth()
@Controller('api-keys')
export class ApiKeysController {
  constructor(private apiKeysService: ApiKeysService) {}

  @Post()
  @ApiOperation({
    summary: 'Create an API key (raw key returned only once)',
  })
  @ResponseMessage('API key created - save the raw key, it cannot be retrieved later')
  async create(
    @Body() dto: CreateApiKeyDto,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    return this.apiKeysService.create(dto, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'List API keys (without raw key)' })
  @ApiQuery({ name: 'partnerId', required: false })
  @ResponseMessage('API keys retrieved')
  async findAll(@Query('partnerId') partnerId?: string) {
    return this.apiKeysService.findAll(partnerId);
  }

  @Delete(':apiKeyId')
  @ApiOperation({ summary: 'Revoke an API key' })
  @ResponseMessage('API key revoked')
  async revoke(
    @Param('apiKeyId') apiKeyId: string,
    @CurrentUser() user: AuthenticatedUser,
  ) {
    await this.apiKeysService.revoke(apiKeyId, user.userId);
    return null;
  }
}
