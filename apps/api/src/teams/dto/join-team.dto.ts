import { IsNotEmpty, Matches } from 'class-validator';
import { TEAM_CODE_ERROR_MESSAGE, TEAM_CODE_REGEX } from 'common';

export class JoinTeamDto {
	/**
	 * @example ABCD1234
	 */
	@IsNotEmpty()
	@Matches(TEAM_CODE_REGEX, { message: TEAM_CODE_ERROR_MESSAGE })
	code: string;
}
