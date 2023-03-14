import { z } from 'zod';

export const createTeamFormSchema = z.object({
	name: z.string().min(1, 'Please enter a team name'),
});
