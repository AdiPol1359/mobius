import { JoinTeamForm } from './JoinTeamForm/JoinTeamForm';

import { Button } from '@/components/common/Button/Button';
import { Modal } from '@/components/common/Modal/Modal';

import type { ComponentProps } from 'react';

type JoinTeamModalProps = Readonly<{
	onButtonClick: () => void;
}> &
	ComponentProps<typeof Modal>;

export const JoinTeamModal = ({
	onButtonClick,
	...props
}: JoinTeamModalProps) => (
	<Modal {...props}>
		<Modal.Title>Join or create team</Modal.Title>
		<JoinTeamForm onSuccess={props.onClose} />
		<div className="my-3.5 flex items-center text-sm text-neutral-700 before:mr-2.5 before:block before:h-[1px] before:grow before:bg-neutral-200 after:ml-2.5 after:block after:h-[1px] after:grow after:bg-neutral-200">
			Don&apos;t have a team code?
		</div>
		<Button
			type="button"
			onClick={() => {
				props.onClose();
				onButtonClick();
			}}
			fullWidth
		>
			Create your own team
		</Button>
	</Modal>
);
