import { ConversationPanel } from '@/components/dashboard/ConversationPanel/ConversationPanel';
import { SettingsPanel } from '@/components/dashboard/SettingsPanel/SettingsPanel';
import { SingleTeamHeader } from '@/components/dashboard/SingleTeamHeader';
import { SingleTeamTabs } from '@/components/dashboard/SingleTeamTabs';

export default function DashboardTeamPage() {
	return (
		<>
			<SingleTeamHeader />
			<SingleTeamTabs>
				<ConversationPanel />
				<SettingsPanel />
			</SingleTeamTabs>
		</>
	);
}
