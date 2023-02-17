import type { ComponentProps } from 'react';

import { BaseModal } from '@/components/BaseModal/BaseModal';

export const JoinTeamModal = (props: ComponentProps<typeof BaseModal>) => (
	<BaseModal {...props}>
		<BaseModal.Title>Join team</BaseModal.Title>
		join team modal content
	</BaseModal>
);
