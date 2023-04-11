import { io } from 'socket.io-client';

import type {
	ServerToClientNotificationsEvents,
	TeamsClientToServerEvents,
	TeamsServerToClientEvents,
} from 'common';
import type { Socket } from 'socket.io-client';

export const notificationsSocket: Socket<ServerToClientNotificationsEvents> =
	io(`${process.env.NEXT_PUBLIC_API_URL}/notifications`);

export const teamsSocket: Socket<
	TeamsServerToClientEvents,
	TeamsClientToServerEvents
> = io(`${process.env.NEXT_PUBLIC_API_URL}/teams`);
