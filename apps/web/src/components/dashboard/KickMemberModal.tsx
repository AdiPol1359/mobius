import { ConfirmModal } from '../common/ConfirmModal';

import { useTeamMembers } from '@/hooks/useTeamMembers';

import type { BaseModal } from '../common/Modal/BaseModal';
import type { ComponentProps } from 'react';

type KickMemberModalProps = Readonly<{
	userId: number;
}> &
	ComponentProps<typeof BaseModal>;

export const KickMemberModal = ({ userId, ...props }: KickMemberModalProps) => {
	const { deleteTeamMemberMutation } = useTeamMembers();

	return (
		<ConfirmModal
			title="Do you want to kick this member from the team?"
			onConfirm={() => {
				deleteTeamMemberMutation.mutate({ userId });
			}}
			{...props}
		/>
	);
};
