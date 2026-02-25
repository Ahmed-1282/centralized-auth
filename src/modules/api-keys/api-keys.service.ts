import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { ApiKey } from '../../entities/api-key.entity';
import { CreateApiKeyDto } from './dto/api-key.dto';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class ApiKeysService {
  constructor(
    @InjectRepository(ApiKey)
    private apiKeyRepo: Repository<ApiKey>,
    private auditService: AuditService,
  ) {}

  async create(
    dto: CreateApiKeyDto,
    createdBy: string,
  ): Promise<{ apiKey: ApiKey; rawKey: string }> {
    // Generate a raw API key
    const rawKey = `gis_${randomBytes(32).toString('hex')}`;
    const keyPrefix = rawKey.substring(0, 12);
    const keyHash = await bcrypt.hash(rawKey, 10);

    const apiKey = this.apiKeyRepo.create({
      partnerId: dto.partnerId,
      keyHash,
      keyPrefix,
      name: dto.name,
      scopes: dto.scopes || [],
      rateLimit: dto.rateLimit || 60,
      expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : null,
      createdBy,
    });

    const saved = await this.apiKeyRepo.save(apiKey);

    await this.auditService.log({
      userId: createdBy,
      action: 'api_key.create',
      resourceType: 'api_key',
      resourceId: saved.apiKeyId,
      details: { partnerId: dto.partnerId, name: dto.name, keyPrefix },
    });

    // Return raw key only once - it cannot be retrieved later
    return { apiKey: saved, rawKey };
  }

  async findAll(partnerId?: string): Promise<ApiKey[]> {
    const qb = this.apiKeyRepo
      .createQueryBuilder('key')
      .leftJoinAndSelect('key.partner', 'partner');

    if (partnerId) {
      qb.andWhere('key.partnerId = :partnerId', { partnerId });
    }

    return qb.orderBy('key.createdAt', 'DESC').getMany();
  }

  async revoke(apiKeyId: string, revokedBy: string): Promise<void> {
    const key = await this.apiKeyRepo.findOne({ where: { apiKeyId } });
    if (!key) throw new NotFoundException('API key not found');

    await this.apiKeyRepo.update(apiKeyId, { isActive: false });

    await this.auditService.log({
      userId: revokedBy,
      action: 'api_key.revoke',
      resourceType: 'api_key',
      resourceId: apiKeyId,
      details: { partnerId: key.partnerId, keyPrefix: key.keyPrefix },
    });
  }
}
