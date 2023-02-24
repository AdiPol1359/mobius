import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	HttpStatus,
	Post,
	Res,
	Session,
} from '@nestjs/common';
import { Response } from 'express';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { UserDto } from '@/users/dto/user.dto';
import { userToUserDto } from '@/users/users.mapper';
import { AppUser } from '@/users/users.types';

import { CreateSessionDto } from './dto/create-session.dto';
import { SessionsService } from './sessions.service';
import { ExpressSession } from './sessions.types';

@Controller('sessions')
export class SessionsController {
	constructor(private readonly sessionsService: SessionsService) {}

	@Get('me')
	@Auth()
	getMeSession(@User() user: AppUser): UserDto {
		return userToUserDto(user);
	}

	@Post()
	async createSession(
		@Body() createSessionDto: CreateSessionDto,
		@Session() session: ExpressSession
	): Promise<UserDto> {
		return userToUserDto(
			await this.sessionsService.createSession(createSessionDto, session)
		);
	}

	@Delete()
	@Auth()
	@HttpCode(HttpStatus.NO_CONTENT)
	async deleteSession(
		@Res({ passthrough: true }) response: Response,
		@Session() session: ExpressSession
	): Promise<void> {
		await this.sessionsService.deleteSession(response, session);
	}
}
