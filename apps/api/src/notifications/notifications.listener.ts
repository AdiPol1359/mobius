import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

import {
	CreateNotificationEvent,
	createNotificationEvent,
} from './events/create-notification.event';
import { NotificationsGateway } from './notifications.gateway';
import { NotificationsService } from './notifications.service';

@Injectable()
export class NotificationsListener {
	constructor(
		private readonly notificationsService: NotificationsService,
		private readonly notificationsGateway: NotificationsGateway
	) {}

	@OnEvent(createNotificationEvent, { async: true })
	async createNotificationEventHandler({
		user,
		content,
	}: CreateNotificationEvent) {
		const notification = await this.notificationsService.createNotification(
			user,
			content
		);

		this.notificationsGateway.server.emit(
			`notification:${user.id}`,
			notification.content
		);
	}
}
