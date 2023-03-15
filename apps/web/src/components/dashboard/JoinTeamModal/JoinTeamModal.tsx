import type { ComponentProps } from 'react';

import { BaseModal } from '../../common/BaseModal/BaseModal';
import { Button } from '../../common/Button/Button';
import { JoinTeamForm } from './JoinTeamForm/JoinTeamForm';

type JoinTeamModalProps = Readonly<{
	onButtonClick: () => void;
}> &
	ComponentProps<typeof BaseModal>;

export const JoinTeamModal = ({
	onButtonClick,
	...props
}: JoinTeamModalProps) => (
	<BaseModal {...props}>
		<BaseModal.Title>Join or create team</BaseModal.Title>
		<JoinTeamForm onSuccess={props.onClose} />
		<div className="my-3.5 flex items-center text-sm text-neutral-700 before:mr-2.5 before:block before:h-[1px] before:grow before:bg-neutral-200 after:ml-2.5 after:block after:h-[1px] after:grow after:bg-neutral-200">
			Don&apos;t have a team code?
		</div>
		<Button
			type="button"
			className="w-full"
			onClick={() => {
				props.onClose();
				onButtonClick();
			}}
		>
			Create your own team
		</Button>
	</BaseModal>
);
