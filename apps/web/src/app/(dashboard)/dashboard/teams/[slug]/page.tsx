import { ChatMessageList } from '@/components/dashboard/ChatMessageList/ChatMessageList';
import { PageTitle } from '@/components/dashboard/PageTitle';
import { SendMessageForm } from '@/components/dashboard/SendMessageForm/SendMessageForm';

export default function DashboardTeamPage() {
	return (
		<>
			<PageTitle>Single team</PageTitle>
			<ChatMessageList />
			<SendMessageForm />
		</>
	);
}
