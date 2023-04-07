import { IsNotEmpty, Matches } from 'class-validator';
import {
	EMAIL_ERROR_MESSAGE,
	EMAIL_REGEX,
	FIRST_NAME_ERROR_MESSAGE,
	LAST_NAME_ERROR_MESSAGE,
	NAME_REGEX,
	PASSWORD_ERROR_MESSAGE,
	PASSWORD_REGEX,
} from 'common';

import { Trim } from '@/common/decorators/trim.decorator';

export class CreateUserDto {
	/**
	 * @example example@example.com
	 */
	@IsNotEmpty()
	@Matches(EMAIL_REGEX, { message: EMAIL_ERROR_MESSAGE })
	@Trim()
	email: string;

	/**
	 * @example Pass123!
	 */
	@IsNotEmpty()
	@Matches(PASSWORD_REGEX, { message: PASSWORD_ERROR_MESSAGE })
	password: string;

	/**
	 * @example John
	 */
	@IsNotEmpty()
	@Matches(NAME_REGEX, { message: FIRST_NAME_ERROR_MESSAGE })
	@Trim()
	firstName: string;

	/**
	 * @example Burton
	 */
	@IsNotEmpty()
	@Matches(NAME_REGEX, { message: LAST_NAME_ERROR_MESSAGE })
	@Trim()
	lastName: string;
}
