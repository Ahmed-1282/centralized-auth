import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEmail,
  IsArray,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePartnerDto {
  @ApiProperty({ example: 'FarmTech Corp' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional({ example: 'farmtech-corp' })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({ example: '+923001234567' })
  @IsString()
  @IsOptional()
  contactNo?: string;

  @ApiPropertyOptional({ example: 'info@farmtech.com' })
  @IsEmail()
  @IsOptional()
  email?: string;
}

export class UpdatePartnerDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  contactNo?: string;

  @ApiPropertyOptional()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  logoUrl?: string;
}

export class SetAllowedDashboardsDto {
  @ApiProperty({
    example: ['crop_monitoring', 'weather', 'vra'],
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  dashboards: string[];
}
