import { ApiPropertyOptional } from '@nestjs/swagger';
import { TeamMemberRole } from '@prisma/client';
import { IsArray, IsOptional } from 'class-validator';

export class UpdateMemberDto {
	@ApiPropertyOptional({ enum: TeamMemberRole, isArray: true })
	@IsArray()
	@IsOptional()
	roles?: TeamMemberRole[];
}
