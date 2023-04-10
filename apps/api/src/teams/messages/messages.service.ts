import { Inject, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

import { TeamsGateway } from '../teams.gateway';
import { CreateMessageDto } from './dto/create-message.dto';
import { mapMessageToMessageDto } from './messages.mapper';
import { Message } from './messages.types';

import { PaginationQueryDto } from '@/common/dto/pagination-query.dto';
import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { AppUser } from '@/users/users.types';

export const select = {
	id: true,
	content: true,
	createdAt: true,
	updatedAt: true,
	user: { select: { id: true, firstName: true, lastName: true } },
} satisfies Prisma.TeamMessageSelect;

@Injectable()
export class MessagesService {
	constructor(
		@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient,
		private readonly teamsGateway: TeamsGateway
	) {}

	getAllMessages(
		teamId: string,
		{ offset = 0, limit = 50 }: PaginationQueryDto
	): Promise<Message[]> {
		return this.prisma.teamMessage.findMany({
			where: { teamId },
			orderBy: { createdAt: 'desc' },
			skip: offset,
			take: limit,
			select,
		});
	}

	async createMessage(
		user: AppUser,
		{ content }: CreateMessageDto,
		teamId: string
	): Promise<Message> {
		const message = await this.prisma.teamMessage.create({
			data: { userId: user.id, teamId, content },
			select,
		});

		this.teamsGateway.server
			.to(`team:${teamId}`)
			.emit('message', mapMessageToMessageDto(message));

		return message;
	}
}
