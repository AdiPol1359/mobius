import { IsNotEmpty, Matches } from 'class-validator';
import {
	EMAIL_ERROR_MESSAGE,
	EMAIL_REGEX,
	PASSWORD_ERROR_MESSAGE,
	PASSWORD_REGEX,
} from 'common';

export class CreateSessionDto {
	/**
	 * @example example@example.com
	 */
	@IsNotEmpty()
	@Matches(EMAIL_REGEX, { message: EMAIL_ERROR_MESSAGE })
	email: string;

	/**
	 * @example Pass123!
	 */
	@IsNotEmpty()
	@Matches(PASSWORD_REGEX, { message: PASSWORD_ERROR_MESSAGE })
	password: string;
}
