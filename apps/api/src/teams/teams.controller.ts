import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query,
} from '@nestjs/common';
import {
	ApiConflictResponse,
	ApiNotFoundResponse,
	ApiTags,
} from '@nestjs/swagger';

import { TeamGuard } from './decorators/team-guard.decorator';
import { CreateTeamDto } from './dto/create-team.dto';
import { DeleteTeamDto } from './dto/delete-team.dto';
import { JoinTeamDto } from './dto/join-team.dto';
import { TeamDto } from './dto/team.dto';
import { CreateMessageDto } from './messages/dto/create-message.dto';
import { MessageDto } from './messages/dto/message.dto';
import {
	mapMessagesToMessageDtos,
	mapMessageToMessageDto,
} from './messages/messages.mapper';
import { MessagesService } from './messages/messages.service';
import { mapTeamsToTeamDtos, mapTeamToTeamDto } from './teams.mapper';
import { TeamsService } from './teams.service';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { PaginationQueryDto } from '@/common/dto/pagination-query.dto';
import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';
import { AppUser } from '@/users/users.types';

@Auth()
@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
	constructor(
		private readonly teamsService: TeamsService,
		private readonly messagesService: MessagesService
	) {}

	@Get()
	async getAllTeams(@User() user: AppUser): Promise<TeamDto[]> {
		return mapTeamsToTeamDtos(await this.teamsService.getAllTeams(user));
	}

	@Post()
	async createTeam(
		@User() user: AppUser,
		@Body() createTeamDto: CreateTeamDto
	): Promise<TeamDto> {
		return mapTeamToTeamDto(
			await this.teamsService.createTeam(user, createTeamDto)
		);
	}

	@Delete(':teamId')
	@TeamGuard('OWNER')
	@ApiNotFoundResponse({
		description: 'Team not found.',
		type: OpenAPIHttpException,
	})
	async deleteTeam(
		@Param('teamId') id: string,
		@User() user: AppUser,
		@Body() { name }: DeleteTeamDto
	): Promise<TeamDto> {
		return mapTeamToTeamDto(await this.teamsService.deleteTeam(user, id, name));
	}

	@Post('join')
	@ApiNotFoundResponse({
		description: 'Team code not found.',
		type: OpenAPIHttpException,
	})
	@ApiConflictResponse({
		description: 'You are already in this team.',
		type: OpenAPIHttpException,
	})
	async joinTeam(
		@User() user: AppUser,
		@Body() { code }: JoinTeamDto
	): Promise<TeamDto> {
		return mapTeamToTeamDto(await this.teamsService.joinTeam(code, user));
	}

	@Post(':teamId/leave')
	@TeamGuard('MEMBER')
	@ApiNotFoundResponse({
		description: 'Team code not found.',
		type: OpenAPIHttpException,
	})
	async leaveTeam(
		@User() user: AppUser,
		@Param('teamId') id: string
	): Promise<TeamDto> {
		return mapTeamToTeamDto(await this.teamsService.leaveTeam(id, user));
	}

	@Get(':teamId/messages')
	@TeamGuard()
	async getAllTeamMessages(
		@Param('teamId') teamId: string,
		@Query() pagination: PaginationQueryDto
	): Promise<MessageDto[]> {
		return mapMessagesToMessageDtos(
			await this.messagesService.getAllMessages(teamId, pagination)
		);
	}

	@Post(':teamId/messages')
	@TeamGuard()
	async createTeamMessage(
		@User() user: AppUser,
		@Body() createMessageDto: CreateMessageDto,
		@Param('teamId') teamId: string
	): Promise<MessageDto> {
		return mapMessageToMessageDto(
			await this.messagesService.createMessage(user, createMessageDto, teamId)
		);
	}
}
