import { TEAM_CODE_ERROR_MESSAGE, TEAM_CODE_LENGTH } from 'common';
import { z } from 'zod';

export const joinTeamFormSchema = z.object({
	code: z
		.string()
		.length(TEAM_CODE_LENGTH, { message: TEAM_CODE_ERROR_MESSAGE }),
});
