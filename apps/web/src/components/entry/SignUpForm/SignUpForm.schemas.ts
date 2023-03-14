import {
	EMAIL_ERROR_MESSAGE,
	EMAIL_REGEX,
	PASSWORD_ERROR_MESSAGE,
	PASSWORD_REGEX,
} from 'common';
import { z } from 'zod';

export const signUpFormSchema = z
	.object({
		firstName: z.string().min(1, 'Please enter your first name'),
		lastName: z.string().min(1, 'Please enter your last name'),
		email: z.string().regex(EMAIL_REGEX, EMAIL_ERROR_MESSAGE),
		password: z.string().regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
		confirmPassword: z.string().regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
		acceptRules: z.literal(true, {
			errorMap: () => ({ message: 'Please accept the terms and conditions' }),
		}),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'Passwords are not the same',
		path: ['confirmPassword'],
	});