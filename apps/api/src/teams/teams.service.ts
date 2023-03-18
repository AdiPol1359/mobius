import crypto from 'node:crypto';

import {
	BadRequestException,
	ConflictException,
	Inject,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { Prisma, PrismaClient, TeamCode, TeamMember } from '@prisma/client';
import { TEAM_CODE_LENGTH } from 'common';

import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { isPrismaError } from '@/prisma/prisma.utils';
import { prismaErrorCode } from '@/prisma/prisma-errors';
import { AppUser } from '@/users/users.types';

import { CreateTeamDto } from './dto/create-team.dto';
import { DeleteTeamDto } from './dto/delete-team.dto';
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
				teamCode: { create: { code: this.generateJoinCode() } },
			},
			select,
		});
	}

	async deleteTeam(id: string, { name }: DeleteTeamDto): Promise<Team> {
		const team = await this.prisma.team.findFirst({
			where: { id, name },
			select,
		});

		if (!team) {
			throw new BadRequestException('Incorrect team name.');
		}

		return await this.prisma.team.delete({ where: { id }, select });
	}

	async getTeamMember(userId: number, teamId: string): Promise<TeamMember> {
		const member = await this.prisma.teamMember.findUnique({
			where: { userId_teamId: { userId, teamId } },
		});

		if (!member) {
			throw new NotFoundException('Team not found.');
		}

		return member;
	}

	async getTeamCodeByCode(code: string): Promise<TeamCode> {
		const teamCode = await this.prisma.teamCode.findUnique({
			where: { code },
		});

		if (!teamCode) {
			throw new NotFoundException('Team code not found.');
		}

		return teamCode;
	}

	async joinTeam(user: AppUser, { code }: JoinTeamDto): Promise<Team> {
		const { teamId } = await this.getTeamCodeByCode(code);

		try {
			const { team } = await this.prisma.teamMember.create({
				data: { teamId, userId: user.id, roles: ['MEMBER'] },
				select: { team: { select } },
			});

			return team;
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
		return crypto.randomBytes(TEAM_CODE_LENGTH / 2).toString('hex');
	}
}
