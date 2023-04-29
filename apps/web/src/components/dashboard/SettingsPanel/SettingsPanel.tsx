'use client';

import { DeleteTeamButton } from './DeleteTeamButton';
import { LeaveTeamButton } from './LeaveTeamButton';
import { SettingsPanelForm } from './SettingsPanelForm/SettingsPanelForm';
import { TeamMembers } from './TeamMembers/TeamMembers';

import { Tabs } from '@/components/common/Tabs/Tabs';
import { useCurrentTeam } from '@/hooks/useCurrentTeam';
import { hasRole } from '@/utils/teams';

export const SettingsPanel = () => {
	const { team, teamId } = useCurrentTeam();

	if (!team) return null;

	return (
		<Tabs.Panel className="space-y-3">
			{hasRole(team, 'OWNER') && (
				<>
					<SettingsPanelForm team={team} />
					<DeleteTeamButton teamId={teamId} />
				</>
			)}
			{hasRole(team, 'MEMBER') && <LeaveTeamButton teamId={teamId} />}
			<TeamMembers readonly={!hasRole(team, 'OWNER')} />
		</Tabs.Panel>
	);
};
