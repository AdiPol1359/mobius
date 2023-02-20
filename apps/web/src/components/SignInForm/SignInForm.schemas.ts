import { z } from 'zod';

export const signInFormSchema = z.object({
	email: z.string().email('Email error'),
	password: z.string().min(1, 'Password error'),
});
