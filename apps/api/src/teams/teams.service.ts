import {
	BadRequestException,
	ConflictException,
	Inject,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { PrismaClient, TeamMember } from '@prisma/client';

import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { isPrismaError } from '@/prisma/prisma.utils';
import { prismaErrorCode } from '@/prisma/prisma-errors';
import { AppUser } from '@/users/users.types';

import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './teams.types';
import { createTeamSelect, generateJoinCode } from './teams.utils';

@Injectable()
export class TeamsService {
	constructor(@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient) {}

	getAllTeams({ id }: AppUser): Promise<Team[]> {
		return this.prisma.team.findMany({
			where: { teamMember: { some: { userId: id } } },
			select: createTeamSelect(id),
		});
	}

	createTeam({ id }: AppUser, { name }: CreateTeamDto): Promise<Team> {
		return this.prisma.team.create({
			data: {
				name,
				teamMember: { create: { userId: id, roles: ['OWNER'] } },
				teamCode: { create: { code: generateJoinCode() } },
			},
			select: createTeamSelect(id),
		});
	}

	async deleteTeam(id: string, name: string): Promise<Team> {
		const team = await this.prisma.team.findFirst({
			where: { id, name },
			select: createTeamSelect(),
		});

		if (!team) {
			throw new BadRequestException('Incorrect team name.');
		}

		return this.prisma.team.delete({
			where: { id },
			select: createTeamSelect(),
		});
	}

	async joinTeam(code: string, { id }: AppUser): Promise<Team> {
		const { id: teamId } = await this.getTeamByCode(code);

		try {
			const { team } = await this.prisma.teamMember.create({
				data: { teamId, userId: id, roles: ['MEMBER'] },
				select: { team: { select: createTeamSelect(id) } },
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

	async leaveTeam(teamId: string, { id }: AppUser): Promise<Team> {
		const { userId } = await this.getTeamMember(id, teamId);
		const { team } = await this.prisma.teamMember.delete({
			where: { userId_teamId: { teamId, userId } },
			select: { team: { select: createTeamSelect(id) } },
		});

		return team;
	}

	async getTeamMember(userId: number, teamId: string): Promise<TeamMember> {
		const member = await this.prisma.teamMember.findUnique({
			where: { userId_teamId: { userId, teamId } },
		});

		if (!member) {
			throw new NotFoundException('Team member not found.');
		}

		return member;
	}

	async getTeamByCode(code: string): Promise<Team> {
		const team = await this.prisma.team.findFirst({
			where: { teamCode: { some: { code } } },
			select: createTeamSelect(),
		});

		if (!team) {
			throw new NotFoundException('Team code not found.');
		}

		return team;
	}
}
