import { Inject, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { AppUser } from '@/users/users.types';

import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './teams.types';

export const select = { id: true, name: true } satisfies Prisma.TeamSelect;

@Injectable()
export class TeamsService {
	constructor(@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient) {}

	createTeam({ name }: CreateTeamDto, user: AppUser): Promise<Team> {
		return this.prisma.team.create({
			data: {
				name,
				TeamMember: { create: { userId: user.id, roles: ['OWNER'] } },
			},
			select,
		});
	}
}
