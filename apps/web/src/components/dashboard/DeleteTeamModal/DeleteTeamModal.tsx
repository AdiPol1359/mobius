import type { ComponentProps } from 'react';

import { BaseModal } from '@/components/common/BaseModal/BaseModal';

import { DeleteTeamForm } from './DeleteTeamForm/DeleteTeamForm';

type DeleteTeamModalProps = Readonly<{
	teamId: string;
}> &
	ComponentProps<typeof BaseModal>;

export const DeleteTeamModal = ({ teamId, ...props }: DeleteTeamModalProps) => (
	<BaseModal {...props}>
		<BaseModal.Title>Delete the team</BaseModal.Title>
		<DeleteTeamForm teamId={teamId} />
	</BaseModal>
);
