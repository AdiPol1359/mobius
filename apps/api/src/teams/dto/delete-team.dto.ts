import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { MAX_TEAM_NAME_LENGTH, TEAM_NAME_ERROR_MESSAGE } from 'common';

import { Trim } from '@/common/decorators/trim.decorator';

export class DeleteTeamDto {
	/**
	 * @example FooTeam
	 */
	@IsNotEmpty()
	@IsString()
	@MaxLength(MAX_TEAM_NAME_LENGTH, { message: TEAM_NAME_ERROR_MESSAGE })
	@Trim()
	name: string;
}
