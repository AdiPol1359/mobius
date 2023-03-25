import type { ComponentProps } from 'react';

import { Modal } from '@/components/common/Modal/Modal';

import { CreateTeamForm } from './CreateTeamForm/CreateTeamForm';

export const CreateTeamModal = (props: ComponentProps<typeof Modal>) => {
	return (
		<Modal {...props}>
			<Modal.Title>Create your own team</Modal.Title>
			<CreateTeamForm onSuccess={props.onClose} />
		</Modal>
	);
};
