import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
  IsArray,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'crop_monitoring' })
  @IsString()
  @IsNotEmpty()
  dashboardCode: string;

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

export class SetRolePermissionsDto {
  @ApiProperty({ type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  permissionIds: string[];
}
