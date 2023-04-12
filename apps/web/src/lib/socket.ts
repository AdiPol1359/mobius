import { io } from 'socket.io-client';

import type {
	NotificationsServerToClientEvents,
	TeamsClientToServerEvents,
	TeamsServerToClientEvents,
} from 'common';
import type { Socket } from 'socket.io-client';

export const notificationsSocket: Socket<NotificationsServerToClientEvents> =
	io(`${process.env.NEXT_PUBLIC_API_URL}/notifications`);

export const teamsSocket: Socket<
	TeamsServerToClientEvents,
	TeamsClientToServerEvents
> = io(`${process.env.NEXT_PUBLIC_API_URL}/teams`);
