import { z } from 'zod';

export const deleteTeamFormSchema = z.object({
	name: z.string().trim().nonempty('Please enter a team name'),
});
