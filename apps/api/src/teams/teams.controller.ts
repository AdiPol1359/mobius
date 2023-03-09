import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Auth } from '@/auth/auth.decorator';
import { User } from '@/common/decorators/user.decorator';
import { AppUser } from '@/users/users.types';

import { CreateTeamDto } from './dto/create-team.dto';
import { TeamDto } from './dto/team.dto';
import { TeamsService } from './teams.service';

@Auth()
@ApiTags('Teams')
@Controller('teams')
export class TeamsController {
	constructor(private readonly teamsService: TeamsService) {}

	@Post()
	createTeam(
		@Body() createTeamDto: CreateTeamDto,
		@User() user: AppUser
	): Promise<TeamDto> {
		return this.teamsService.createTeam(createTeamDto, user);
	}
}
