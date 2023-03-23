import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
	ApiBadRequestResponse,
	ApiConflictResponse,
	ApiNotFoundResponse,
	ApiTags,
} from '@nestjs/swagger';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';
import { AppUser } from '@/users/users.types';

import { TeamRole } from './decorators/team-role.decorator';
import { CreateTeamDto } from './dto/create-team.dto';
import { DeleteTeamDto } from './dto/delete-team.dto';
import { JoinTeamDto } from './dto/join-team.dto';
import { TeamDto } from './dto/team.dto';
import { mapTeamsToTeamDtos, mapTeamToTeamDto } from './teams.mapper';
import { TeamsService } from './teams.service';

@Auth()
@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
	constructor(private readonly teamsService: TeamsService) {}

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
	@TeamRole('OWNER')
	@ApiBadRequestResponse({
		description: 'Incorrect team name.',
		type: OpenAPIHttpException,
	})
	async deleteTeam(
		@Param('teamId') id: string,
		@Body() { name }: DeleteTeamDto
	): Promise<TeamDto> {
		return mapTeamToTeamDto(await this.teamsService.deleteTeam(id, name));
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
	@TeamRole('MEMBER')
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
