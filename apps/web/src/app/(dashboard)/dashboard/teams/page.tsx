import { TeamList } from '@/components/dashboard/TeamList/TeamList';
import { TeamsHeader } from '@/components/dashboard/TeamsHeader/TeamsHeader';

export default function DashboardTeamsPage() {
	return (
		<>
			<TeamsHeader />
			<TeamList />
		</>
	);
}
