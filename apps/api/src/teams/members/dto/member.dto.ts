import { ApiProperty } from '@nestjs/swagger';
import { TeamMemberRole } from '@prisma/client';

export class MemberDto {
	/**
	 * @example 1
	 */
	id: number;

	/**
	 * @example John
	 */
	firstName: string;

	/**
	 * @example Burton
	 */
	lastName: string;

	@ApiProperty({ enum: TeamMemberRole, isArray: true })
	roles: TeamMemberRole[];
}
