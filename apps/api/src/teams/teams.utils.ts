import { Prisma } from '@prisma/client';

export const createTeamSelect = (userId?: number) =>
	({
		id: true,
		name: true,
		...(userId && { teamMember: { where: { userId } } }),
	} satisfies Prisma.TeamSelect);
