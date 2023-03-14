'use client';

import { useTeams } from '@/hooks/useTeams';

import { EmptyTeams } from './EmptyTeams';
import { SingleTeam } from './SingleTeam/SingleTeam';

export const TeamList = () => {
	const { data } = useTeams();

	if (data?.data.length === 0) {
		return <EmptyTeams />;
	}

	return (
		<ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
			{data?.data.map((team) => (
				<li key={team.id}>
					<SingleTeam team={team} />
				</li>
			))}
		</ul>
	);
};
