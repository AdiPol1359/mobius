'use client';

import { AiOutlineDelete } from 'react-icons/ai';

import { Menu } from '@/components/common/Menu/Menu';
import { DeleteTeamModal } from '@/components/dashboard/DeleteTeamModal/DeleteTeamModal';
import { useModal } from '@/hooks/useModal';

type DeleteTeamButtonProps = Readonly<{
	teamId: string;
}>;

export const DeleteTeamButton = ({ teamId }: DeleteTeamButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Menu.Item variant="red" onClick={openModal}>
				<AiOutlineDelete />
				Delete team
			</Menu.Item>
			<DeleteTeamModal teamId={teamId} isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
