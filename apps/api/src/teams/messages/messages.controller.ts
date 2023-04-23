import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TeamGuard } from '../decorators/team-guard.decorator';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageDto } from './dto/message.dto';
import {
	mapMessagesToMessageDtos,
	mapMessageToMessageDto,
} from './messages.mapper';
import { MessagesService } from './messages.service';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { PaginationQueryDto } from '@/common/dto/pagination-query.dto';
import { AppUser } from '@/users/users.types';

@Auth()
@ApiTags('Teams')
@Controller('teams/:teamId')
export class MessagesContoller {
	constructor(private readonly messagesService: MessagesService) {}

	@Get('messages')
	@TeamGuard()
	async getAllMessages(
		@Param('teamId') teamId: string,
		@Query() pagination: PaginationQueryDto
	): Promise<MessageDto[]> {
		return mapMessagesToMessageDtos(
			await this.messagesService.getAllMessages(teamId, pagination)
		);
	}

	@Post('messages')
	@TeamGuard()
	async createMessage(
		@Param('teamId') teamId: string,
		@User() user: AppUser,
		@Body() createMessageDto: CreateMessageDto
	): Promise<MessageDto> {
		return mapMessageToMessageDto(
			await this.messagesService.createMessage(teamId, user, createMessageDto)
		);
	}
}
