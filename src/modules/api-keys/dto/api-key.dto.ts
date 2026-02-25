import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
  IsArray,
  IsNumber,
  IsDateString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateApiKeyDto {
  @ApiProperty()
  @IsUUID()
  partnerId: string;

  @ApiProperty({ example: 'Production Key' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: ['farms.read', 'indices.read'] })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  scopes?: string[];

  @ApiPropertyOptional({ example: 60, description: 'Requests per minute' })
  @IsNumber()
  @IsOptional()
  rateLimit?: number;

  @ApiPropertyOptional({ description: 'ISO date string for expiry' })
  @IsDateString()
  @IsOptional()
  expiresAt?: string;
}
