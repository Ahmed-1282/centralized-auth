import {
  IsOptional,
  IsString,
  IsEmail,
  IsBoolean,
  MinLength,
} from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'john@example.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: 'John Doe' })
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiPropertyOptional({ example: '+923001234567' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class ChangePasswordDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  currentPassword?: string;

  @ApiPropertyOptional()
  @IsString()
  @MinLength(6)
  newPassword: string;
}
