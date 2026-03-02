import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuditService } from '../audit/audit.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
    private configService: ConfigService,
    private auditService: AuditService,
  ) {}

  async create(dto: CreateUserDto, createdBy?: string): Promise<User> {
    // Check uniqueness
    const existing = await this.userRepo.findOne({
      where: [
        { username: dto.username },
        ...(dto.email ? [{ email: dto.email }] : []),
      ],
    });
    if (existing) {
      throw new ConflictException('Username or email already exists');
    }

    const rounds = Number(this.configService.get('BCRYPT_ROUNDS', 12));
    const passwordHash = await bcrypt.hash(dto.password, rounds);

    const user = this.userRepo.create({
      username: dto.username,
      passwordHash,
      email: dto.email,
      fullName: dto.fullName,
      phone: dto.phone,
      isSystemUser: dto.isSystemUser || false,
      partnerId: dto.partnerId || null,
    });

    const saved = await this.userRepo.save(user);

    await this.auditService.log({
      userId: createdBy,
      action: 'user.create',
      resourceType: 'user',
      resourceId: saved.userId,
      details: { username: dto.username, partnerId: dto.partnerId },
    });

    return saved;
  }

  async findAll(options?: {
    partnerId?: string;
    isSystemUser?: boolean;
    isActive?: boolean;
    limit?: number;
    offset?: number;
  }): Promise<{ data: User[]; total: number }> {
    const qb = this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.partner', 'partner')
      .where('user.deletedAt IS NULL');

    if (options?.partnerId) {
      qb.andWhere('user.partnerId = :partnerId', {
        partnerId: options.partnerId,
      });
    }
    if (options?.isSystemUser !== undefined) {
      qb.andWhere('user.isSystemUser = :isSystemUser', {
        isSystemUser: options.isSystemUser,
      });
    }
    if (options?.isActive !== undefined) {
      qb.andWhere('user.isActive = :isActive', { isActive: options.isActive });
    }

    qb.orderBy('user.createdAt', 'DESC');
    qb.take(options?.limit || 50);
    qb.skip(options?.offset || 0);

    const [data, total] = await qb.getManyAndCount();
    return { data, total };
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { userId, deletedAt: IsNull() },
      relations: [
        'partner',
        'userRoles',
        'userRoles.role',
        'userRoles.role.dashboard',
      ],
    });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async update(
    userId: string,
    dto: UpdateUserDto,
    updatedBy?: string,
  ): Promise<User> {
    const user = await this.findOne(userId);
    Object.assign(user, dto);
    const saved = await this.userRepo.save(user);

    await this.auditService.log({
      userId: updatedBy,
      action: 'user.update',
      resourceType: 'user',
      resourceId: userId,
      details: dto,
    });

    return saved;
  }

  async changePassword(
    userId: string,
    newPassword: string,
    changedBy?: string,
  ): Promise<void> {
    const rounds = Number(this.configService.get('BCRYPT_ROUNDS', 12));
    const passwordHash = await bcrypt.hash(newPassword, rounds);
    await this.userRepo.update(userId, { passwordHash });

    await this.auditService.log({
      userId: changedBy,
      action: 'user.change_password',
      resourceType: 'user',
      resourceId: userId,
    });
  }

  async softDelete(userId: string, deletedBy?: string): Promise<void> {
    await this.userRepo.softDelete(userId);

    await this.auditService.log({
      userId: deletedBy,
      action: 'user.delete',
      resourceType: 'user',
      resourceId: userId,
    });
  }
}
