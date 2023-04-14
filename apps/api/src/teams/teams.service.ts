import {
	ConflictException,
	Inject,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Prisma, PrismaClient, TeamMember } from '@prisma/client';

import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './teams.types';
import { createTeamSelect, generateJoinCode } from './teams.utils';

import {
	CreateNotificationEvent,
	createNotificationEvent,
} from '@/notifications/events/create-notification.event';
import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { isPrismaError } from '@/prisma/prisma.utils';
import { prismaErrorCode } from '@/prisma/prisma-errors';
import { AppUser } from '@/users/users.types';

@Injectable()
export class TeamsService {
	constructor(
		@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient,
		private readonly eventEmitter: EventEmitter2
	) {}

	getAllTeams(user: AppUser): Promise<Team[]> {
		return this.prisma.team.findMany({
			where: { teamMember: { some: { userId: user.id } } },
			orderBy: { createdAt: 'desc' },
			select: createTeamSelect(user.id),
		});
	}

	getTeamById(id: string, user: AppUser): Promise<Team> {
		return this.findTeam({ id }, user);
	}

	async createTeam(user: AppUser, { name }: CreateTeamDto): Promise<Team> {
		const team = await this.prisma.team.create({
			data: {
				name,
				teamMember: { create: { userId: user.id, roles: ['OWNER'] } },
				teamCode: { create: { code: generateJoinCode() } },
			},
			select: createTeamSelect(user.id),
		});

		this.eventEmitter.emit(
			createNotificationEvent,
			new CreateNotificationEvent(
				user,
				`Team ${team.name} has been successfully created!`
			)
		);

		return team;
	}

	async deleteTeam(user: AppUser, id: string, name: string): Promise<Team> {
		const team = await this.findTeam({ id, name });

		await this.prisma.team.delete({
			where: { id },
		});

		this.eventEmitter.emit(
			createNotificationEvent,
			new CreateNotificationEvent(
				user,
				`Team ${team.name} has been successfully deleted!`
			)
		);

		return team;
	}

	async joinTeam(code: string, user: AppUser): Promise<Team> {
		const { id: teamId } = await this.findTeam({
			teamCode: { some: { code } },
		});

		try {
			const { team } = await this.prisma.teamMember.create({
				data: { teamId, userId: user.id, roles: ['MEMBER'] },
				select: { team: { select: createTeamSelect(user.id) } },
			});

			this.eventEmitter.emit(
				createNotificationEvent,
				new CreateNotificationEvent(
					user,
					`You has successfully joined the ${team.name} team!`
				)
			);

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

	async leaveTeam(teamId: string, user: AppUser): Promise<Team> {
		const { userId } = await this.getTeamMember(user.id, teamId);
		const { team } = await this.prisma.teamMember.delete({
			where: { userId_teamId: { teamId, userId } },
			select: { team: { select: createTeamSelect(user.id) } },
		});

		this.eventEmitter.emit(
			createNotificationEvent,
			new CreateNotificationEvent(
				user,
				`You has successfully left the ${team.name} team!`
			)
		);

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

	private async findTeam(
		where: Prisma.TeamWhereInput,
		user?: AppUser
	): Promise<Team> {
		const team = await this.prisma.team.findFirst({
			where,
			select: createTeamSelect(user?.id),
		});

		if (!team) {
			throw new NotFoundException('Team not found.');
		}

		return team;
	}
}
