import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
  IsBoolean,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePermissionDto {
  @ApiProperty({ example: 'crop_monitoring' })
  @IsString()
  @IsNotEmpty()
  dashboardCode: string;

  @ApiProperty({ example: 'vra.manage' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 'Manage VRA Maps' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: 'vra' })
  @IsString()
  @IsOptional()
  module?: string;
}

export class SetUserPermissionDto {
  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  permissionId: string;

  @ApiProperty({ example: true, description: 'true = grant, false = deny' })
  @IsBoolean()
  isGranted: boolean;
}

export class SetPartnerFeatureToggleDto {
  @ApiProperty()
  @IsUUID()
  partnerId: string;

  @ApiProperty()
  @IsUUID()
  permissionId: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isEnabled: boolean;
}
