'use client';

import { EmptyTeams } from './EmptyTeams';
import { SingleTeam } from './SingleTeam/SingleTeam';

import { Spinner } from '@/components/common/Spinner/Spinner';
import { useTeams } from '@/hooks/useTeams';

export const TeamList = () => {
	const { teams, isLoading } = useTeams();

	if (isLoading) {
		return (
			<div className="my-auto flex items-center justify-center">
				<Spinner />
			</div>
		);
	}

	if (teams?.length === 0) {
		return <EmptyTeams />;
	}

	return (
		<ul className="custom-scrollbar mt-6 grid grid-cols-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
			{teams?.map((team) => (
				<li key={team.id}>
					<SingleTeam team={team} />
				</li>
			))}
		</ul>
	);
};
