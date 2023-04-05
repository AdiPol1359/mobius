import type { ServerToClientNotificationsEvents } from 'common';
import type { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';

export const notificationsSocket: Socket<ServerToClientNotificationsEvents> =
	io(`${process.env.NEXT_PUBLIC_API_URL}/notifications`);
