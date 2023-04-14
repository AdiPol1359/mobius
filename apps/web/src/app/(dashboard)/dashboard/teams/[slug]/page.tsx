import { SingleTeamPageTitle } from '@/components/dashboard/SingleTeamPageTitle';
import { TeamMessageForm } from '@/components/dashboard/TeamMessageForm/TeamMessageForm';
import { TeamMessages } from '@/components/dashboard/TeamMessages/TeamMessages';

export default function DashboardTeamPage() {
	return (
		<>
			<SingleTeamPageTitle />
			<TeamMessages />
			<TeamMessageForm />
		</>
	);
}
