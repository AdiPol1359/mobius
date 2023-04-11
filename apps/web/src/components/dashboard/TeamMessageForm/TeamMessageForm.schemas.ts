import { MAX_TEAM_MESSAGE_LENGTH, TEAM_MESSAGE_ERROR_MESSAGE } from 'common';
import { z } from 'zod';

export const teamMessageFormSchema = z.object({
	message: z
		.string()
		.trim()
		.nonempty('Please enter a message')
		.max(MAX_TEAM_MESSAGE_LENGTH, TEAM_MESSAGE_ERROR_MESSAGE),
});
