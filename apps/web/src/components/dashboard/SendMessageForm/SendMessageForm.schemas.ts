import { z } from 'zod';

export const sendMessageFormSchema = z.object({
	message: z
		.string()
		.trim()
		.nonempty('Please enter a message!')
		.max(50, 'Your message is too long!'),
});
