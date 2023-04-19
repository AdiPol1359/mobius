'use client';

import { CopyButton } from '../common/CopyButton/CopyButton';
import { PageTitle } from './PageTitle';

import { useCurrentTeam } from '@/hooks/useCurrentTeam';

export const SingleTeamHeader = () => {
	const { team } = useCurrentTeam();

	return (
		<header className="flex justify-between">
			<PageTitle>{team?.name}</PageTitle>
			{team?.code && (
				<CopyButton
					value={team.code}
					text="Copy join code"
					copiedText="Copied"
				/>
			)}
		</header>
	);
};
