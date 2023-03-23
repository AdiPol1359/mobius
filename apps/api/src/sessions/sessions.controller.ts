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
import {
	ApiNotFoundResponse,
	ApiTags,
	ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Response } from 'express';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';
import { UserDto } from '@/users/dto/user.dto';
import { mapUserToUserDto } from '@/users/users.mapper';
import { AppUser } from '@/users/users.types';

import { CreateSessionDto } from './dto/create-session.dto';
import { SessionsService } from './sessions.service';
import { ExpressSession } from './sessions.types';

@Controller('sessions')
@ApiTags('Sessions')
export class SessionsController {
	constructor(private readonly sessionsService: SessionsService) {}

	@Get('me')
	@Auth()
	getMeSession(@User() user: AppUser): UserDto {
		return mapUserToUserDto(user);
	}

	@Post()
	@ApiNotFoundResponse({
		description: 'User not found.',
		type: OpenAPIHttpException,
	})
	@ApiUnauthorizedResponse({
		description: 'Incorrect email or password.',
		type: OpenAPIHttpException,
	})
	async createSession(
		@Body() createSessionDto: CreateSessionDto,
		@Session() session: ExpressSession
	): Promise<UserDto> {
		return mapUserToUserDto(
			await this.sessionsService.createSession(createSessionDto, session)
		);
	}

	@Delete('me')
	@Auth()
	@HttpCode(HttpStatus.NO_CONTENT)
	async deleteSession(
		@Res({ passthrough: true }) response: Response,
		@Session() session: ExpressSession
	): Promise<void> {
		await this.sessionsService.deleteSession(response, session);
	}
}
