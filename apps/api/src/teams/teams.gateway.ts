import {
	SubscribeMessage,
	WebSocketGateway,
	WebSocketServer,
} from '@nestjs/websockets';
import { TeamsServerToClientEvents } from 'common';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'teams', cors: true })
export class TeamsGateway {
	@WebSocketServer()
	server: Server<TeamsServerToClientEvents>;

	@SubscribeMessage('join')
	handleJoin(socket: Socket, data: string) {
		socket.join(`team:${data}`);
	}

	@SubscribeMessage('leave')
	handleLeave(socket: Socket, data: string) {
		socket.leave(`team:${data}`);
	}
}
