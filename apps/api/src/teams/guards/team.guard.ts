import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { TeamMemberRole } from '@prisma/client';
import { Request } from 'express';

import { TeamsService } from '../teams.service';

@Injectable()
export class TeamGuard implements CanActivate {
	constructor(
		private readonly reflector: Reflector,
		private readonly teamsService: TeamsService
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const roles = this.reflector.get<TeamMemberRole[]>(
			'roles',
			context.getHandler()
		);
		const request = context.switchToHttp().getRequest<Request>();
		const {
			user,
			params: { teamId },
		} = request;

		const member = await this.teamsService.getTeamMember(user.id, teamId);

		return (
			roles.length === 0 || member.roles.some((role) => roles.includes(role))
		);
	}
}
