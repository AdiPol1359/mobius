import { LeaveTeamModal } from '../LeaveTeamModal';

import { Button } from '@/components/common/Button/Button';
import { useModal } from '@/hooks/useModal';

type LeaveTeamButtonProps = Readonly<{
	teamId: string;
}>;

export const LeaveTeamButton = ({ teamId }: LeaveTeamButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Button type="button" onClick={openModal} fullWidth>
				Leave the team
			</Button>
			<LeaveTeamModal isOpen={isOpen} teamId={teamId} onClose={closeModal} />
		</>
	);
};
