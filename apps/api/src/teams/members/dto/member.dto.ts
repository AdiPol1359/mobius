import { ApiProperty } from '@nestjs/swagger';
import { TeamMemberRole } from '@prisma/client';

export class MemberDto {
	id: number;

	firstName: string;

	lastName: string;

	@ApiProperty({ enum: TeamMemberRole, isArray: true })
	roles: TeamMemberRole[];
}
