import { CreateTeamForm } from './CreateTeamForm/CreateTeamForm';

import { Modal } from '@/components/common/Modal/Modal';

import type { ComponentProps } from 'react';

export const CreateTeamModal = (props: ComponentProps<typeof Modal>) => (
	<Modal {...props}>
		<Modal.Title>Create your own team</Modal.Title>
		<CreateTeamForm onSuccess={props.onClose} />
	</Modal>
);
