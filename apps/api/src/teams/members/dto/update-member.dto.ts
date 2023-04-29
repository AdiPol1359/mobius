import { ApiPropertyOptional } from '@nestjs/swagger';
import { TeamMemberRole } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export class UpdateMemberDto {
	@ApiPropertyOptional({ enum: TeamMemberRole })
	@IsString()
	@IsOptional()
	@IsEnum(TeamMemberRole)
	role?: TeamMemberRole;
}
