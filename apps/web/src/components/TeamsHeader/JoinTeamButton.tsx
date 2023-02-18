'use client';

import { AiOutlineTeam } from 'react-icons/ai';

import { useModal } from '@/hooks/useModal';

import { Button } from '../Button';
import { JoinTeamModal } from '../JoinTeamModal';

export const JoinTeamButton = () => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Button type="button" onClick={openModal}>
				<AiOutlineTeam className="text-xl" />
				Join or create team
			</Button>
			<JoinTeamModal isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
