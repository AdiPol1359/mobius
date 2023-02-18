import type { ComponentProps } from 'react';

import { BaseModal } from '@/components/BaseModal/BaseModal';

import { Button } from './Button';
import { Input } from './Input';

export const JoinTeamModal = (props: ComponentProps<typeof BaseModal>) => (
	<BaseModal {...props}>
		<BaseModal.Title>Join or create team</BaseModal.Title>
		<Input type="text" placeholder="Enter team code" spellCheck={false} />
		<Button type="button" variant="primary" className="mt-2 w-full">
			Join the team
		</Button>
		<div className="my-3.5 flex items-center text-sm text-neutral-700 before:mr-2.5 before:block before:h-[1px] before:grow before:bg-neutral-200 after:ml-2.5 after:block after:h-[1px] after:grow after:bg-neutral-200">
			Don&apos;t have a team code?
		</div>
		<Button type="button" className="w-full">
			Create your own team
		</Button>
	</BaseModal>
);
