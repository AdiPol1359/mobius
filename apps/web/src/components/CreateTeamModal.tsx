import type { ComponentProps } from 'react';

import { BaseModal } from './BaseModal/BaseModal';
import { Button } from './Button';
import { Input } from './Input';

export const CreateTeamModal = (props: ComponentProps<typeof BaseModal>) => (
	<BaseModal {...props}>
		<BaseModal.Title>Create your own team</BaseModal.Title>
		<Input type="text" placeholder="Enter team name" />
		<Button type="button" variant="primary" className="mt-2 w-full">
			Create a new team
		</Button>
	</BaseModal>
);
