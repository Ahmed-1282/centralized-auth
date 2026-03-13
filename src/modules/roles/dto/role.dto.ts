import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
  IsObject,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'crop_monitoring' })
  @IsString()
  @IsNotEmpty()
  dashboard: string;

  @ApiProperty({ example: 'field_manager' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 'Field Manager' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: {} })
  @IsObject()
  @IsOptional()
  permissions?: Record<string, any>;
}

export class AssignRoleDto {
  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  roleId: string;
}

export class RevokeRoleDto {
  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsUUID()
  roleId: string;
}

export class UpdateRolePermissionsDto {
  @ApiProperty({ example: { canView: true, canEdit: false } })
  @IsObject()
  permissions: Record<string, any>;
}
