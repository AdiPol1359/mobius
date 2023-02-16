import { Team } from './Team';

export const TeamList = () => (
	<ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
		<li>
			<Team name="Lorem ipsum" />
		</li>
		<li>
			<Team name="Lorem ipsum" />
		</li>
		<li>
			<Team name="Lorem ipsum" />
		</li>
	</ul>
);
