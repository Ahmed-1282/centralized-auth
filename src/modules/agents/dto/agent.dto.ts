import { IsNotEmpty, IsString, IsOptional, IsUUID, IsObject } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAgentDto {
  @ApiProperty()
  @IsUUID()
  partnerId: string;

  @ApiProperty({ example: '+923001234567' })
  @IsString()
  @IsNotEmpty()
  msisdn: string;

  @ApiPropertyOptional({ example: 'Ali Khan' })
  @IsString()
  @IsOptional()
  subscriberName?: string;

  @ApiPropertyOptional({ example: { lat: 30.3753, lng: 69.3451 } })
  @IsObject()
  @IsOptional()
  homeLocation?: { lat: number; lng: number };

  @ApiPropertyOptional({ description: 'Link to existing user account' })
  @IsUUID()
  @IsOptional()
  userId?: string;
}

export class UpdateAgentDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  subscriberName?: string;

  @ApiPropertyOptional()
  @IsObject()
  @IsOptional()
  homeLocation?: { lat: number; lng: number };

  @ApiPropertyOptional({ enum: ['active', 'inactive', 'suspended'] })
  @IsString()
  @IsOptional()
  status?: string;

  @ApiPropertyOptional()
  @IsUUID()
  @IsOptional()
  userId?: string;
}
