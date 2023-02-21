import { Prisma } from '@prisma/client';

import { select } from './users.service';

export type AppUser = Prisma.UserGetPayload<{ select: typeof select }>;
