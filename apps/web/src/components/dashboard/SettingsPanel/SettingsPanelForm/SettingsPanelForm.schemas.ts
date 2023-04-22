import { MAX_TEAM_NAME_LENGTH, TEAM_NAME_ERROR_MESSAGE } from 'common';
import { z } from 'zod';

export const settingsPanelFormSchema = z.object({
	name: z
		.string()
		.trim()
		.nonempty('Please enter a team name')
		.max(MAX_TEAM_NAME_LENGTH, TEAM_NAME_ERROR_MESSAGE),
});
