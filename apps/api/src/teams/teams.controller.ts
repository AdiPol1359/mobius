import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {
	ApiBadRequestResponse,
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
import { TeamsService } from './teams.service';

@Auth()
@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
	constructor(private readonly teamsService: TeamsService) {}

	@Get()
	getAllTeams(@User() user: AppUser): Promise<TeamDto[]> {
		return this.teamsService.getAllTeams(user);
	}

	@Post()
	createTeam(
		@User() user: AppUser,
		@Body() createTeamDto: CreateTeamDto
	): Promise<TeamDto> {
		return this.teamsService.createTeam(user, createTeamDto);
	}

	@Delete(':teamId')
	@TeamRole('OWNER')
	@ApiBadRequestResponse({
		description: 'Incorrect team name.',
		type: OpenAPIHttpException,
	})
	async deleteTeam(
		@Param('teamId') id: string,
		@Body() deleteTeamDto: DeleteTeamDto
	): Promise<TeamDto> {
		return this.teamsService.deleteTeam(id, deleteTeamDto);
	}

	@Post('join')
	@ApiNotFoundResponse({
		description: 'Team code not found.',
		type: OpenAPIHttpException,
	})
	joinTeam(
		@User() user: AppUser,
		@Body() joinTeamDto: JoinTeamDto
	): Promise<TeamDto> {
		return this.teamsService.joinTeam(user, joinTeamDto);
	}
}
