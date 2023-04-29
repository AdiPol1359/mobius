import type { Team, TeamRole } from '@/types';

export const hasRole = (team: Team, role: TeamRole) => team.role === role;
