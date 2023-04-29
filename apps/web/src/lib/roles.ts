import type { TeamRole } from '@/types';

export const roles: TeamRole[] = ['OWNER', 'MEMBER'];

export const validateRole = (role: string): role is TeamRole =>
	Boolean(roles.includes(role as any));
