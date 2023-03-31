import { AiOutlineExport } from 'react-icons/ai';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { LeaveTeamModal } from '@/components/dashboard/LeaveTeamModal';
import { useModal } from '@/hooks/useModal';

type LeaveTeamButtonProps = Readonly<{
	teamId: string;
}>;

export const LeaveTeamButton = ({ teamId }: LeaveTeamButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Dropdown.Item onClick={openModal}>
				<AiOutlineExport /> Leave team
			</Dropdown.Item>
			<LeaveTeamModal teamId={teamId} isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
