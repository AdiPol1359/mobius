import { MembersTable } from './MembersTable/MembersTable';

import { useTeamMembers } from '@/hooks/useTeamMembers';
import { useUser } from '@/hooks/useUser';

type TeamMembersProps = Readonly<{
	readonly: boolean;
}>;

export const TeamMembers = ({ readonly }: TeamMembersProps) => {
	const { members } = useTeamMembers();
	const { user } = useUser();

	return (
		<MembersTable>
			{members.map((member) => (
				<MembersTable.Row
					key={member.id}
					member={member}
					readonly={readonly || member.id === user?.id}
				/>
			))}
		</MembersTable>
	);
};
