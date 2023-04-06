import { z } from 'zod';

export const createTeamFormSchema = z.object({
	name: z.string().trim().nonempty('Please enter a team name'),
});
