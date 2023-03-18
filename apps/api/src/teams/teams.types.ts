import type { Prisma } from '@prisma/client';

import { createTeamSelect } from './teams.utils';

export type Team = Prisma.TeamGetPayload<{
	select: ReturnType<typeof createTeamSelect>;
}>;
