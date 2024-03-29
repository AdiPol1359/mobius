import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
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
import { UpdateTeamDto } from './dto/update-team.dto';
import { MessagesService } from './messages/messages.service';
import { mapTeamsToTeamDtos, mapTeamToTeamDto } from './teams.mapper';
import { TeamsService } from './teams.service';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
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

	@Get(':teamId')
	@TeamGuard()
	@ApiNotFoundResponse({
		description: 'Team not found.',
		type: OpenAPIHttpException,
	})
	async getTeamById(
		@User() user: AppUser,
		@Param('teamId') id: string
	): Promise<TeamDto> {
		return mapTeamToTeamDto(await this.teamsService.getTeamById(id, user));
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

	@Patch(':teamId')
	@TeamGuard('OWNER')
	async updateTeam(
		@Param('teamId') teamId: string,
		@User() user: AppUser,
		@Body() updateTeamDto: UpdateTeamDto
	): Promise<TeamDto> {
		return mapTeamToTeamDto(
			await this.teamsService.updateTeam(teamId, user, updateTeamDto)
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
}
