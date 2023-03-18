import crypto from 'node:crypto';

import { Prisma } from '@prisma/client';
import { TEAM_CODE_LENGTH } from 'common';

export const createTeamSelect = (userId?: number) =>
	({
		id: true,
		name: true,
		...(userId && { teamMember: { where: { userId } } }),
	} satisfies Prisma.TeamSelect);

export const generateJoinCode = () =>
	crypto.randomBytes(TEAM_CODE_LENGTH / 2).toString('hex');
