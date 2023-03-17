import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseUUIDPipe,
	Post,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiTags } from '@nestjs/swagger';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';
import { AppUser } from '@/users/users.types';

import { CreateTeamDto } from './dto/create-team.dto';
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

	@Delete(':id')
	deleteTeam(
		@User() user: AppUser,
		@Param('id', ParseUUIDPipe) id: string
	): any {
		return this.teamsService.deleteTeam(user, id);
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
