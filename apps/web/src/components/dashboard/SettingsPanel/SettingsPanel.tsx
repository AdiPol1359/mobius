'use client';

import { DeleteTeamButton } from './DeleteTeamButton';
import { LeaveTeamButton } from './LeaveTeamButton';
import { SettingsPanelForm } from './SettingsPanelForm/SettingsPanelForm';

import { Tabs } from '@/components/common/Tabs/Tabs';
import { useCurrentTeam } from '@/hooks/useCurrentTeam';
import { hasRole } from '@/utils/teams';

export const SettingsPanel = () => {
	const { team, teamId } = useCurrentTeam();

	return (
		<Tabs.Panel className="space-y-3">
			{team && hasRole(team, 'OWNER') && (
				<>
					<SettingsPanelForm team={team} />
					<DeleteTeamButton teamId={teamId} />
				</>
			)}
			{team && hasRole(team, 'MEMBER') && <LeaveTeamButton teamId={teamId} />}
		</Tabs.Panel>
	);
};
