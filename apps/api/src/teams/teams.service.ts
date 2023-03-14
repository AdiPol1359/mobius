import crypto from 'node:crypto';

import {
	ConflictException,
	Inject,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { Prisma, PrismaClient, TeamJoinCode } from '@prisma/client';

import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { isPrismaError } from '@/prisma/prisma.utils';
import { prismaErrorCode } from '@/prisma/prisma-errors';
import { AppUser } from '@/users/users.types';

import { CreateTeamDto } from './dto/create-team.dto';
import { JoinTeamDto } from './dto/join-team.dto';
import { Team } from './teams.types';

export const select = { id: true, name: true } satisfies Prisma.TeamSelect;

@Injectable()
export class TeamsService {
	constructor(@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient) {}

	getAllTeams(user: AppUser): Promise<Team[]> {
		return this.prisma.team.findMany({
			where: { teamMember: { some: { userId: user.id } } },
			select,
		});
	}

	createTeam(user: AppUser, { name }: CreateTeamDto): Promise<Team> {
		return this.prisma.team.create({
			data: {
				name,
				teamMember: { create: { userId: user.id, roles: ['OWNER'] } },
				teamJoinCode: { create: { code: this.generateJoinCode() } },
			},
			select,
		});
	}

	async getTeamJoinCodeByCode(code: string): Promise<TeamJoinCode> {
		const teamCode = await this.prisma.teamJoinCode.findUnique({
			where: { code },
		});

		if (!teamCode) {
			throw new NotFoundException('Team code not found.');
		}

		return teamCode;
	}

	async joinTeam(user: AppUser, { code }: JoinTeamDto): Promise<void> {
		const { teamId } = await this.getTeamJoinCodeByCode(code);

		try {
			await this.prisma.teamMember.create({
				data: { teamId, userId: user.id, roles: ['MEMBER'] },
			});
		} catch (err) {
			if (
				isPrismaError(err) &&
				err.code === prismaErrorCode.UniqueKeyViolation
			) {
				throw new ConflictException('You are already in this team.');
			}

			throw err;
		}
	}

	private generateJoinCode(): string {
		return crypto.randomBytes(4).toString('hex');
	}
}
