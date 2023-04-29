import { useState } from 'react';

import { KickMemberButton } from './KickMemberButton';
import { RoleSelect } from './RoleSelect';

import { Avatar } from '@/components/common/Avatar/Avatar';
import { Button } from '@/components/common/Button/Button';
import { useTeamMembers } from '@/hooks/useTeamMembers';

import type { Member } from '@/types';

type MembersTableRowProps = Readonly<{
	readonly: boolean;
	member: Member;
}>;

export const MembersTableRow = ({
	readonly,
	member: { id: userId, firstName, lastName, role },
}: MembersTableRowProps) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [newRole, setNewRole] = useState(role);

	const { updateTeamMemberMutation } = useTeamMembers();

	const handleSaveButtonClick = () => {
		updateTeamMemberMutation.mutate(
			{ userId, role: newRole },
			{
				onSuccess: () => {
					setIsEditMode(false);
				},
			}
		);
	};

	return (
		<tr>
			<td className="py-4">
				<article className="flex items-center gap-x-2.5">
					<Avatar name={firstName} />
					<p>
						{firstName} {lastName}
					</p>
				</article>
			</td>
			<td className="py-4">
				{isEditMode ? (
					<RoleSelect value={newRole} onChange={setNewRole} />
				) : (
					role
				)}
			</td>
			{readonly || (
				<td className="flex py-4">
					{isEditMode ? (
						<Button
							type="button"
							variant="default"
							onClick={handleSaveButtonClick}
						>
							Save
						</Button>
					) : (
						<>
							<Button
								type="button"
								variant="text"
								onClick={() => setIsEditMode(true)}
							>
								Edit
							</Button>
							<KickMemberButton userId={userId} />
						</>
					)}
				</td>
			)}
		</tr>
	);
};
