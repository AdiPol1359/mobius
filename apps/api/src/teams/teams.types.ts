import type { Prisma } from '@prisma/client';

import { select } from './teams.service';

export type Team = Prisma.TeamGetPayload<{ select: typeof select }>;
