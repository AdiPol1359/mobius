'use client';

import { Menu } from '@/components/Menu/Menu';

import { Avatar } from '../Avatar';

export const UserMenu = () => (
	<Menu>
		<Menu.Button>
			<Avatar>A</Avatar>
		</Menu.Button>
		<Menu.Dropdown>user menu</Menu.Dropdown>
	</Menu>
);
