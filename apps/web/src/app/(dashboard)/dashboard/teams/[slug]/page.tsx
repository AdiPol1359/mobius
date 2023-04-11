import { PageTitle } from '@/components/dashboard/PageTitle';
import { TeamMessageForm } from '@/components/dashboard/TeamMessageForm/TeamMessageForm';
import { TeamMessages } from '@/components/dashboard/TeamMessages/TeamMessages';

export default function DashboardTeamPage() {
	return (
		<>
			<PageTitle>Single team</PageTitle>
			<TeamMessages />
			<TeamMessageForm />
		</>
	);
}
