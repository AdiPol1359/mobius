import type { ComponentProps } from 'react';
import { toast } from 'react-hot-toast';

import { useTeams } from '@/hooks/useTeams';
import { DEFAULT_ERROR_MESSAGE } from '@/lib/constants';
import { leaveTeam } from '@/services/teams.service';

import { ConfirmModal } from '../common/ConfirmModal';
import type { Modal } from '../common/Modal/Modal';

type LeaveTeamModalProps = Readonly<{
	teamId: string;
}> &
	ComponentProps<typeof Modal>;

export const LeaveTeamModal = ({ teamId, ...props }: LeaveTeamModalProps) => {
	const { leaveTeamMutation } = useTeams();

	const handleModalConfirm = () => {
		const mutation = leaveTeamMutation.mutateAsync({
			teamId,
		});

		toast.promise(mutation, {
			loading: 'Loading...',
			success: ({ data: { name } }) => `Successfully left the ${name} team!`,
			error: (err) => {
				if (err instanceof leaveTeam.Error) {
					return err.getActualType().data.message;
				}

				return DEFAULT_ERROR_MESSAGE;
			},
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
