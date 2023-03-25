import type { ComponentProps } from 'react';

import { Modal } from '@/components/common/Modal/Modal';

import { DeleteTeamForm } from './DeleteTeamForm/DeleteTeamForm';

type DeleteTeamModalProps = Readonly<{
	teamId: string;
}> &
	ComponentProps<typeof Modal>;

export const DeleteTeamModal = ({ teamId, ...props }: DeleteTeamModalProps) => (
	<Modal {...props}>
		<Modal.Title>Delete the team</Modal.Title>
		<DeleteTeamForm teamId={teamId} />
	</Modal>
);
