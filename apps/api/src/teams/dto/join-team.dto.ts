import { IsNotEmpty, Length } from 'class-validator';
import { TEAM_CODE_ERROR_MESSAGE, TEAM_CODE_LENGTH } from 'common';

export class JoinTeamDto {
	/**
	 * @example ABCD1234
	 */
	@IsNotEmpty()
	@Length(TEAM_CODE_LENGTH, TEAM_CODE_LENGTH, {
		message: TEAM_CODE_ERROR_MESSAGE,
	})
	code: string;
}
