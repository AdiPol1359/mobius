import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { NotificationsServerToClientEvents } from 'common';
import { Server } from 'socket.io';

@WebSocketGateway({ namespace: 'notifications', cors: true })
export class NotificationsGateway {
	@WebSocketServer()
	server: Server<NotificationsServerToClientEvents>;
}
