import { SingleTeamHeader } from '@/components/dashboard/SingleTeamHeader';
import { TeamMessageForm } from '@/components/dashboard/TeamMessageForm/TeamMessageForm';
import { TeamMessages } from '@/components/dashboard/TeamMessages/TeamMessages';

export default function DashboardTeamPage() {
	return (
		<>
			<SingleTeamHeader />
			<TeamMessages />
			<TeamMessageForm />
		</>
	);
}
