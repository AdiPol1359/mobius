import { createTeamSelect } from './teams.utils';

import type { Prisma } from '@prisma/client';

export type Team = Prisma.TeamGetPayload<{
	select: ReturnType<typeof createTeamSelect>;
}>;
