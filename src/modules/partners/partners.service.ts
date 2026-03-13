import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Partner } from '../../entities/partner.entity';
import { CreatePartnerDto, UpdatePartnerDto } from './dto/create-partner.dto';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(Partner)
    private partnerRepo: Repository<Partner>,
    private auditService: AuditService,
  ) {}

  async create(dto: CreatePartnerDto, createdBy?: string): Promise<Partner> {
    const partner = this.partnerRepo.create(dto);
    const saved = await this.partnerRepo.save(partner);

    await this.auditService.log({
      userId: createdBy,
      action: 'partner.create',
      resourceType: 'partner',
      resourceId: saved.partnerId,
      details: { name: dto.name },
    });

    return saved;
  }

  async findAll(options?: {
    isActive?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<{ data: Partner[]; total: number }> {
    const qb = this.partnerRepo
      .createQueryBuilder('partner')
      .where('partner.deletedAt IS NULL');

    if (options?.isActive !== undefined) {
      qb.andWhere('partner.isActive = :isActive', {
        isActive: options.isActive,
      });
    }

    qb.orderBy('partner.createdAt', 'DESC');
    qb.take(options?.limit || 50);
    qb.skip(options?.offset || 0);

    const [data, total] = await qb.getManyAndCount();
    return { data, total };
  }

  async findOne(partnerId: string): Promise<Partner> {
    const partner = await this.partnerRepo.findOne({
      where: { partnerId, deletedAt: IsNull() },
    });
    if (!partner) throw new NotFoundException('Partner not found');
    return partner;
  }

  async update(
    partnerId: string,
    dto: UpdatePartnerDto,
    updatedBy?: string,
  ): Promise<Partner> {
    const partner = await this.findOne(partnerId);
    Object.assign(partner, dto);
    const saved = await this.partnerRepo.save(partner);

    await this.auditService.log({
      userId: updatedBy,
      action: 'partner.update',
      resourceType: 'partner',
      resourceId: partnerId,
      details: dto,
    });

    return saved;
  }

  async setAllowedDashboards(
    partnerId: string,
    dashboards: string[],
    updatedBy?: string,
  ): Promise<Partner> {
    const partner = await this.findOne(partnerId);
    partner.allowedDashboards = dashboards;
    const saved = await this.partnerRepo.save(partner);

    await this.auditService.log({
      userId: updatedBy,
      action: 'partner.set_dashboards',
      resourceType: 'partner',
      resourceId: partnerId,
      details: { allowedDashboards: dashboards },
    });

    return saved;
  }

  async softDelete(partnerId: string, deletedBy?: string): Promise<void> {
    await this.partnerRepo.softDelete(partnerId);

    await this.auditService.log({
      userId: deletedBy,
      action: 'partner.delete',
      resourceType: 'partner',
      resourceId: partnerId,
    });
  }
}
