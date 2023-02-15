import { PageTitle } from '@/components/PageTitle';
import { TeamList } from '@/components/TeamList/TeamList';

export default function DashboardTeamPage() {
	return (
		<>
			<PageTitle>Teams</PageTitle>
			<TeamList />
		</>
	);
}
