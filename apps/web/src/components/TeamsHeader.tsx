import { AiOutlineTeam } from 'react-icons/ai';

import { Button } from '@/components/Button';
import { PageTitle } from '@/components/PageTitle';

export const TeamsHeader = () => (
	<header className="mb-6 flex items-center justify-between">
		<PageTitle>Teams</PageTitle>
		<Button type="button">
			<AiOutlineTeam className="text-xl" />
			Dołącz do zespołu
		</Button>
	</header>
);
