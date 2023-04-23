import { Prisma } from '@prisma/client';

import { select } from './members.service';

export type Member = Prisma.TeamMemberGetPayload<{ select: typeof select }>;
