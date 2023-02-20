import { z } from 'zod';

export const signUpFormSchema = z
	.object({
		firstName: z.string().min(1, 'First name error'),
		lastName: z.string().min(1, 'Last name error'),
		email: z.string().email('Email error'),
		password: z.string().min(1, 'Password error'),
		confirmPassword: z.string().min(1, 'Confirm password error'),
		acceptRules: z.literal(true, {
			errorMap: () => ({ message: 'Accept rules error' }),
		}),
	})
	.refine(({ password, confirmPassword }) => password === confirmPassword, {
		message: 'Passwords are not the same',
		path: ['confirmPassword'],
	});
