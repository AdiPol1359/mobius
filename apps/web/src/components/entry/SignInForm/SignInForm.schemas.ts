import {
	EMAIL_ERROR_MESSAGE,
	EMAIL_REGEX,
	PASSWORD_ERROR_MESSAGE,
	PASSWORD_REGEX,
} from 'common';
import { z } from 'zod';

export const signInFormSchema = z.object({
	email: z.string().trim().regex(EMAIL_REGEX, EMAIL_ERROR_MESSAGE),
	password: z.string().regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGE),
});
