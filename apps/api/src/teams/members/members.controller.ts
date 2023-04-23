import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TeamGuard } from '../decorators/team-guard.decorator';
import { MemberDto } from './dto/member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { mapMembersToMemberDtos, mapMemberToMemberDto } from './members.mapper';
import { MembersService } from './members.service';

import { Auth } from '@/auth/auth.decorator';

@Auth()
@ApiTags('Teams')
@Controller('teams/:teamId')
export class MembersController {
	constructor(private readonly membersService: MembersService) {}

	@Get('members')
	async getAllMembers(@Param('teamId') teamId: string): Promise<MemberDto[]> {
		return mapMembersToMemberDtos(
			await this.membersService.getAllMembers(teamId)
		);
	}

	@Patch('members/:userId')
	@TeamGuard('OWNER')
	async updateTeamMember(
		@Param('teamId') teamId: string,
		@Param('userId', ParseIntPipe) userId: number,
		@Body() updateMemberDto: UpdateMemberDto
	) {
		return mapMemberToMemberDto(
			await this.membersService.updateTeamMember(
				teamId,
				userId,
				updateMemberDto
			)
		);
	}

	@Delete('members/:userId')
	@TeamGuard('OWNER')
	async deleteTeamMember(
		@Param('teamId') teamId: string,
		@Param('userId', ParseIntPipe) userId: number
	): Promise<MemberDto> {
		return mapMemberToMemberDto(
			await this.membersService.deleteTeamMember(teamId, userId)
		);
	}
}
