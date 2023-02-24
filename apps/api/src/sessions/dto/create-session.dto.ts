import { IsNotEmpty, Matches } from 'class-validator';
import {
	EMAIL_ERROR_MESSAGE,
	EMAIL_REGEX,
	PASSWORD_ERROR_MESSAGE,
	PASSWORD_REGEX,
} from 'common';

export class CreateSessionDto {
	@IsNotEmpty()
	@Matches(EMAIL_REGEX, { message: EMAIL_ERROR_MESSAGE })
	email: string;

	@IsNotEmpty()
	@Matches(PASSWORD_REGEX, { message: PASSWORD_ERROR_MESSAGE })
	password: string;
}
