import { Prisma } from '@prisma/client';
import { TEAM_CODE_LENGTH } from 'common';
import crypto from 'node:crypto';

export const createTeamSelect = (userId?: number) =>
	({
		id: true,
		name: true,
		teamCode: { select: { code: true } },
		...(userId && {
			teamMember: { where: { userId }, select: { role: true } },
		}),
	} satisfies Prisma.TeamSelect);

export const generateJoinCode = () =>
	crypto.randomBytes(TEAM_CODE_LENGTH / 2).toString('hex');
