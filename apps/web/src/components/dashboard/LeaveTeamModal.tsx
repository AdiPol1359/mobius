import type { ComponentProps } from 'react';

import { useTeams } from '@/hooks/useTeams';

import { ConfirmModal } from '../common/ConfirmModal';
import type { Modal } from '../common/Modal/Modal';

type LeaveTeamModalProps = Readonly<{
	teamId: string;
}> &
	ComponentProps<typeof Modal>;

export const LeaveTeamModal = ({ teamId, ...props }: LeaveTeamModalProps) => {
	const { leaveTeamMutation } = useTeams();

	const handleModalConfirm = () => {
		leaveTeamMutation.mutate({
			teamId,
		});
	};

	return (
		<ConfirmModal
			title="Do you want to leave the team?"
			onConfirm={handleModalConfirm}
			{...props}
		/>
	);
};
