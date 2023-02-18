import { PageTitle } from '@/components/PageTitle';

import { JoinOrCreateTeamButton } from './JoinOrCreateTeamButton';

export const TeamsHeader = () => (
	<header className="mb-6 flex items-center justify-between">
		<PageTitle>Teams</PageTitle>
		<JoinOrCreateTeamButton />
	</header>
);
