import { z } from 'zod';

export const deleteTeamFormSchema = z.object({
	name: z.string().min(1, 'Please enter a team name'),
});
