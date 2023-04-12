'use client';

import { LoadingContent } from '../LoadingContent';
import { EmptyTeams } from './EmptyTeams';
import { TeamList } from './TeamList/TeamList';

import { useTeams } from '@/hooks/useTeams';

export const UserTeams = () => {
	const { teams, isLoading } = useTeams();

	return (
		<LoadingContent isLoading={isLoading}>
			{teams.length === 0 ? <EmptyTeams /> : <TeamList teams={teams} />}
		</LoadingContent>
	);
};
