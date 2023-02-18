import { PageTitle } from '@/components/PageTitle';

import { JoinTeamButton } from './JoinTeamButton';

export const TeamsHeader = () => (
	<header className="mb-6 flex items-center justify-between">
		<PageTitle>Teams</PageTitle>
		<JoinTeamButton />
	</header>
);
