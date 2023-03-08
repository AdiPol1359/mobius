'use client';

import { Avatar } from '@/components/Avatar';
import { Menu } from '@/components/Menu/Menu';

import { HEADER_MENU_TOP } from '../DashboardHeader';
import { LogoutButton } from './LogoutButton';

export const UserMenu = () => (
	<Menu>
		<Menu.Button>
			<Avatar>A</Avatar>
		</Menu.Button>
		<Menu.Dropdown top={HEADER_MENU_TOP}>
			<LogoutButton />
		</Menu.Dropdown>
	</Menu>
);
