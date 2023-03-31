'use client';

import { AiOutlineDelete } from 'react-icons/ai';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { DeleteTeamModal } from '@/components/dashboard/DeleteTeamModal/DeleteTeamModal';
import { useModal } from '@/hooks/useModal';

type DeleteTeamButtonProps = Readonly<{
	teamId: string;
}>;

export const DeleteTeamButton = ({ teamId }: DeleteTeamButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Dropdown.Item variant="red" onClick={openModal}>
				<AiOutlineDelete />
				Delete team
			</Dropdown.Item>
			<DeleteTeamModal teamId={teamId} isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
