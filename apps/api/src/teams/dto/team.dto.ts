import { ApiPropertyOptional } from '@nestjs/swagger';
import { TeamMemberRole } from '@prisma/client';

export class TeamDto {
	/**
	 * @example be756869-0cbe-4be9-8e28-4abbde7bc3fa
	 */
	id: string;

	/**
	 * @example FooTeam
	 */
	name: string;

	/**
	 * @example ABCD1234
	 */
	code?: string;

	@ApiPropertyOptional({ enum: TeamMemberRole, isArray: true })
	roles?: TeamMemberRole[];
}
