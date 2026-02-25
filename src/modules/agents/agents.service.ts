import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from '../../entities/agent.entity';
import { CreateAgentDto, UpdateAgentDto } from './dto/agent.dto';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class AgentsService {
  constructor(
    @InjectRepository(Agent)
    private agentRepo: Repository<Agent>,
    private auditService: AuditService,
  ) {}

  async create(dto: CreateAgentDto, createdBy?: string): Promise<Agent> {
    const existing = await this.agentRepo.findOne({
      where: { partnerId: dto.partnerId, msisdn: dto.msisdn },
    });
    if (existing) {
      throw new ConflictException(
        'Agent with this phone number already exists for this partner',
      );
    }

    const agent = this.agentRepo.create({
      partnerId: dto.partnerId,
      msisdn: dto.msisdn,
      subscriberName: dto.subscriberName,
      homeLocation: dto.homeLocation,
      userId: dto.userId || null,
    });

    const saved = await this.agentRepo.save(agent);

    await this.auditService.log({
      userId: createdBy,
      action: 'agent.create',
      resourceType: 'agent',
      resourceId: saved.agentId,
      details: { partnerId: dto.partnerId, msisdn: dto.msisdn },
    });

    return saved;
  }

  async findAll(options?: {
    partnerId?: string;
    status?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ data: Agent[]; total: number }> {
    const qb = this.agentRepo
      .createQueryBuilder('agent')
      .leftJoinAndSelect('agent.partner', 'partner')
      .leftJoinAndSelect('agent.user', 'user');

    if (options?.partnerId) {
      qb.andWhere('agent.partnerId = :partnerId', {
        partnerId: options.partnerId,
      });
    }
    if (options?.status) {
      qb.andWhere('agent.status = :status', { status: options.status });
    }

    qb.orderBy('agent.createdAt', 'DESC');
    qb.take(options?.limit || 50);
    qb.skip(options?.offset || 0);

    const [data, total] = await qb.getManyAndCount();
    return { data, total };
  }

  async findOne(agentId: string): Promise<Agent> {
    const agent = await this.agentRepo.findOne({
      where: { agentId },
      relations: ['partner', 'user'],
    });
    if (!agent) throw new NotFoundException('Agent not found');
    return agent;
  }

  async update(
    agentId: string,
    dto: UpdateAgentDto,
    updatedBy?: string,
  ): Promise<Agent> {
    const agent = await this.findOne(agentId);
    Object.assign(agent, dto);
    const saved = await this.agentRepo.save(agent);

    await this.auditService.log({
      userId: updatedBy,
      action: 'agent.update',
      resourceType: 'agent',
      resourceId: agentId,
      details: dto,
    });

    return saved;
  }

  async remove(agentId: string, removedBy?: string): Promise<void> {
    await this.agentRepo.delete(agentId);

    await this.auditService.log({
      userId: removedBy,
      action: 'agent.delete',
      resourceType: 'agent',
      resourceId: agentId,
    });
  }
}
