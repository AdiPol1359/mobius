import { Button } from '@/components/common/Button/Button';
import { KickMemberModal } from '@/components/dashboard/KickMemberModal';
import { useModal } from '@/hooks/useModal';

type KickMemberButtonProps = Readonly<{
	userId: number;
}>;

export const KickMemberButton = ({ userId }: KickMemberButtonProps) => {
	const { isOpen, openModal, closeModal } = useModal();

	return (
		<>
			<Button type="button" variant="text" onClick={openModal}>
				Kick
			</Button>
			<KickMemberModal userId={userId} isOpen={isOpen} onClose={closeModal} />
		</>
	);
};
