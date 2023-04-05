import { Inject, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

import { PaginationQueryDto } from '@/common/dto/pagination-query.dto';
import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { AppUser } from '@/users/users.types';

import { Notification } from './notifications.types';

export const select = {
	id: true,
	content: true,
	createdAt: true,
} satisfies Prisma.NotificationSelect;

@Injectable()
export class NotificationsService {
	constructor(@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient) {}

	getAllNotifications(
		{ offset = 0, limit = 4 }: PaginationQueryDto,
		user: AppUser
	): Promise<Notification[]> {
		return this.prisma.notification.findMany({
			where: { userId: user.id },
			orderBy: { createdAt: 'desc' },
			skip: offset,
			take: limit,
			select,
		});
	}

	createNotification(user: AppUser, content: string): Promise<Notification> {
		return this.prisma.notification.create({
			data: { userId: user.id, content },
			select,
		});
	}
}
