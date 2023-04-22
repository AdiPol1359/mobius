import { Button } from '../../common/Button/Button';
import { DeleteTeamModal } from '../DeleteTeamModal/DeleteTeamModal';

import { useModal } from '@/hooks/useModal';

type DeleteTeamButtonProps = Readonly<{
	teamId: string;
}>;

export const DeleteTeamButton = ({ teamId }: DeleteTeamButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Button type="button" variant="danger" onClick={openModal} fullWidth>
				Delete the team
			</Button>
			<DeleteTeamModal isOpen={isOpen} teamId={teamId} onClose={closeModal} />
		</>
	);
};
