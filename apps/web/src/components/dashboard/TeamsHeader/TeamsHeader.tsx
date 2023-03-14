import { PageTitle } from '../PageTitle';
import { JoinOrCreateTeamButton } from './JoinOrCreateTeamButton';

export const TeamsHeader = () => (
	<header className="sticky top-0 z-40 mb-6 flex items-center justify-between">
		<PageTitle>Teams</PageTitle>
		<JoinOrCreateTeamButton />
	</header>
);
