import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { AppUser } from '@/users/users.types';

import { NotificationDto } from './dto/notification.dto';
import { NotificationsService } from './notifications.service';

@Auth()
@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
	constructor(private readonly notificationsService: NotificationsService) {}

	@Get()
	getAllNotifications(@User() user: AppUser): Promise<NotificationDto[]> {
		return this.notificationsService.getAllNotifications(user);
	}
}
