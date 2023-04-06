import { ConfirmModal } from '../common/ConfirmModal';

import { useTeams } from '@/hooks/useTeams';

import type { Modal } from '../common/Modal/Modal';
import type { ComponentProps } from 'react';

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
