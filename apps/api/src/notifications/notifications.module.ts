import { Module } from '@nestjs/common';

import { AuthModule } from '@/auth/auth.module';
import { NotificationsGateway } from '@/notifications/notifications.gateway';

import { NotificationsController } from './notifications.controller';
import { NotificationsListener } from './notifications.listener';
import { NotificationsService } from './notifications.service';

@Module({
	imports: [AuthModule],
	providers: [
		NotificationsGateway,
		NotificationsService,
		NotificationsListener,
	],
	controllers: [NotificationsController],
})
export class NotificationsModule {}
