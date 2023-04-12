import { SingleTeam } from './SingleTeam/SingleTeam';

import type { Team } from '@/types';

type TeamListProps = Readonly<{
	teams: Team[];
}>;

export const TeamList = ({ teams }: TeamListProps) => (
	<ul className="custom-scrollbar mt-6 grid grid-cols-1 gap-4 overflow-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
		{teams.map((team) => (
			<li key={team.id}>
				<SingleTeam team={team} />
			</li>
		))}
	</ul>
);
