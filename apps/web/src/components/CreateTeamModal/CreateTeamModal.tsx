import type { ComponentProps } from 'react';

import { BaseModal } from '../BaseModal/BaseModal';
import { CreateTeamForm } from './CreateTeamForm/CreateTeamForm';

export const CreateTeamModal = (props: ComponentProps<typeof BaseModal>) => {
	return (
		<BaseModal {...props}>
			<BaseModal.Title>Create your own team</BaseModal.Title>
			<CreateTeamForm onSuccess={props.onClose} />
		</BaseModal>
	);
};
