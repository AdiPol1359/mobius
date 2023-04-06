import Link from 'next/link';

import { SingleTeamMenu } from './SingleTeamMenu/SingleTeamMenu';

import { getFirstLetter } from '@/utils/string';

import type { Team } from '@/types';

type TeamProps = Readonly<{
	team: Team;
}>;

export const SingleTeam = ({ team }: TeamProps) => {
	const { id, name } = team;

	return (
		<article className="relative h-60 rounded-md bg-white shadow-sm transition-colors duration-100 hover:bg-neutral-50">
			<SingleTeamMenu team={team} />
			<Link
				href={`/dashboard/teams/${id}`}
				className="flex h-full flex-col items-center justify-center"
			>
				<div className="flex h-20 w-20 items-center justify-center rounded-md bg-indigo-600 text-white">
					{getFirstLetter(name)}
				</div>
				<h3 className="mt-2.5 text-lg font-medium">{name}</h3>
			</Link>
		</article>
	);
};
