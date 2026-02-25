import { ApiProperty } from '@nestjs/swagger';

export class AuthTokensDto {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  refreshToken: string;
}

export class UserProfileDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  username: string;

  @ApiProperty({ required: false })
  email: string;

  @ApiProperty({ required: false })
  fullName: string;

  @ApiProperty()
  isSystemUser: boolean;

  @ApiProperty({ required: false, nullable: true })
  partnerId: string | null;

  @ApiProperty({ required: false, nullable: true })
  partnerName: string | null;

  @ApiProperty({ type: [Object] })
  roles: { dashboardCode: string; roleCode: string; roleName: string }[];
}

export class LoginResponseDto {
  @ApiProperty()
  tokens: AuthTokensDto;

  @ApiProperty()
  user: UserProfileDto;
}
