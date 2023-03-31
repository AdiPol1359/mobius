'use client';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';

import { UserAvatar } from '../../UserAvatar';
import { LogoutButton } from './LogoutButton';

export const UserMenu = () => (
	<Dropdown fullHeight>
		<Dropdown.Button>
			<UserAvatar />
		</Dropdown.Button>
		<Dropdown.Items position="center">
			<LogoutButton />
		</Dropdown.Items>
	</Dropdown>
);
