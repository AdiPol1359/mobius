'use client';

import { PageTitle } from './PageTitle';

import { useCurrentTeam } from '@/hooks/useCurrentTeam';

export const SingleTeamPageTitle = () => {
	const { team } = useCurrentTeam();

	return <PageTitle>{team?.name}</PageTitle>;
};
