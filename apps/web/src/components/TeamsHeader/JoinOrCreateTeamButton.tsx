'use client';

import { AiOutlineTeam } from 'react-icons/ai';

import { useModal } from '@/hooks/useModal';

import { Button } from '../Button';
import { CreateTeamModal } from '../CreateTeamModal/CreateTeamModal';
import { JoinTeamModal } from '../JoinTeamModal';

export const JoinOrCreateTeamButton = () => {
	const {
		isOpen: isJoinTeamOpen,
		openModal: openJoinTeamModal,
		closeModal: closeJoinTeamModal,
	} = useModal();

	const {
		isOpen: isCreateTeamOpen,
		openModal: openCreateTeamModal,
		closeModal: closeCreateTeamModal,
	} = useModal();

	return (
		<>
			<Button type="button" onClick={openJoinTeamModal}>
				<AiOutlineTeam className="text-xl" />
				Join or create team
			</Button>
			<JoinTeamModal
				isOpen={isJoinTeamOpen}
				onClose={closeJoinTeamModal}
				onButtonClick={openCreateTeamModal}
			/>
			<CreateTeamModal
				isOpen={isCreateTeamOpen}
				onClose={closeCreateTeamModal}
			/>
		</>
	);
};
