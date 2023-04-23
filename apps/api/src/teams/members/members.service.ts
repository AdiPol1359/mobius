import { Inject, Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

import { UpdateMemberDto } from './dto/update-member.dto';
import { MemberNotFounException } from './exceptions/member-not-found.exception';
import { Member } from './member.types';

import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { isPrismaError } from '@/prisma/prisma.utils';
import { prismaErrorCode } from '@/prisma/prisma-errors';

export const select = {
	roles: true,
	user: { select: { id: true, firstName: true, lastName: true } },
} satisfies Prisma.TeamMemberSelect;

@Injectable()
export class MembersService {
	constructor(@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient) {}

	getAllMembers(teamId: string): Promise<Member[]> {
		return this.prisma.teamMember.findMany({
			where: { teamId },
			select,
		});
	}

	async updateTeamMember(
		teamId: string,
		userId: number,
		{ roles }: UpdateMemberDto
	) {
		try {
			return await this.prisma.teamMember.update({
				where: { userId_teamId: { teamId, userId } },
				data: { ...(roles && { roles: { set: roles } }) },
				select,
			});
		} catch (err) {
			if (
				isPrismaError(err) &&
				err.code === prismaErrorCode.RecordRequiredButNotFound
			) {
				throw new MemberNotFounException();
			}

			throw err;
		}
	}

	async deleteTeamMember(teamId: string, userId: number): Promise<Member> {
		try {
			return await this.prisma.teamMember.delete({
				where: { userId_teamId: { teamId, userId } },
				select,
			});
		} catch (err) {
			if (
				isPrismaError(err) &&
				err.code === prismaErrorCode.RecordRequiredButNotFound
			) {
				throw new MemberNotFounException();
			}

			throw err;
		}
	}
}
