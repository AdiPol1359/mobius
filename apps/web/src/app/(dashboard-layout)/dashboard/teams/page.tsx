import { TeamList } from '@/components/TeamList/TeamList';
import { TeamsHeader } from '@/components/TeamsHeader';

export default function DashboardTeamsPage() {
	return (
		<>
			<TeamsHeader />
			<TeamList />
		</>
	);
}
