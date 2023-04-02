import { Prisma } from '@prisma/client';

import { select } from './notifications.service';

export type Notification = Prisma.NotificationGetPayload<{
	select: typeof select;
}>;
