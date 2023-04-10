import { Prisma } from '@prisma/client';

import { select } from './messages.service';

export type Message = Prisma.TeamMessageGetPayload<{
	select: typeof select;
}>;
