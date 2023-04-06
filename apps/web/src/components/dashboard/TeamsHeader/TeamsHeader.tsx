import { PageTitle } from '../PageTitle';
import { JoinOrCreateTeamButton } from './JoinOrCreateTeamButton';

export const TeamsHeader = () => (
	<header className="flex items-center justify-between">
		<PageTitle>Teams</PageTitle>
		<JoinOrCreateTeamButton />
	</header>
);
