import type { Team, TeamRole } from '@/types';

export const hasRole = (team: Team, role: TeamRole) =>
	Boolean(team.roles?.includes(role));
