import { AiOutlineExport } from 'react-icons/ai';

import { Menu } from '@/components/common/Menu/Menu';
import { LeaveTeamModal } from '@/components/dashboard/LeaveTeamModal';
import { useModal } from '@/hooks/useModal';

type LeaveTeamButtonProps = Readonly<{
	teamId: string;
}>;

export const LeaveTeamButton = ({ teamId }: LeaveTeamButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Menu.Item onClick={openModal}>
				<AiOutlineExport /> Leave team
			</Menu.Item>
			<LeaveTeamModal teamId={teamId} isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
