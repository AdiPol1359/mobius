import { PageTitle } from '@/components/PageTitle';
import { TeamList } from '@/components/TeamList/TeamList';

export default function DashboardTeamListPage() {
	return (
		<>
			<PageTitle>Teams</PageTitle>
			<TeamList />
		</>
	);
}
