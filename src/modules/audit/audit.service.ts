import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuditLog } from '../../entities/audit-log.entity';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(AuditLog)
    private auditLogRepo: Repository<AuditLog>,
  ) {}

  async log(params: {
    userId?: string;
    action: string;
    resourceType?: string;
    resourceId?: string;
    details?: Record<string, any>;
    ipAddress?: string;
    userAgent?: string;
  }): Promise<void> {
    const entry = this.auditLogRepo.create(params);
    await this.auditLogRepo.save(entry);
  }

  async findAll(options?: {
    userId?: string;
    action?: string;
    resourceType?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ data: AuditLog[]; total: number }> {
    const qb = this.auditLogRepo.createQueryBuilder('log');

    if (options?.userId) {
      qb.andWhere('log.userId = :userId', { userId: options.userId });
    }
    if (options?.action) {
      qb.andWhere('log.action LIKE :action', {
        action: `%${options.action}%`,
      });
    }
    if (options?.resourceType) {
      qb.andWhere('log.resourceType = :resourceType', {
        resourceType: options.resourceType,
      });
    }

    qb.orderBy('log.createdAt', 'DESC');
    qb.take(options?.limit || 50);
    qb.skip(options?.offset || 0);

    const [data, total] = await qb.getManyAndCount();
    return { data, total };
  }
}
