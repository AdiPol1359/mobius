'use client';

import { Menu } from '@/components/Menu/Menu';

import { Avatar } from '../Avatar';
import { HEADER_MENU_TOP } from './DashboardHeader';

export const UserMenu = () => (
	<Menu>
		<Menu.Button>
			<Avatar>A</Avatar>
		</Menu.Button>
		<Menu.Dropdown top={HEADER_MENU_TOP}>user menu</Menu.Dropdown>
	</Menu>
);
