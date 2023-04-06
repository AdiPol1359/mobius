'use client';

import { LogoutButton } from './LogoutButton';
import { UserAvatar } from './UserAvatar';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';

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
