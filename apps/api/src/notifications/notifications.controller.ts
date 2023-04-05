import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { PaginationQueryDto } from '@/common/dto/pagination-query.dto';
import { AppUser } from '@/users/users.types';

import { NotificationDto } from './dto/notification.dto';
import { NotificationsService } from './notifications.service';

@Auth()
@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
	constructor(private readonly notificationsService: NotificationsService) {}

	@Get()
	getAllNotifications(
		@Query() paginationQueryDto: PaginationQueryDto,
		@User() user: AppUser
	): Promise<NotificationDto[]> {
		return this.notificationsService.getAllNotifications(
			paginationQueryDto,
			user
		);
	}
}
