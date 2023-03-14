'use client';

import { Menu } from '@/components/common/Menu/Menu';

import { UserAvatar } from '../../UserAvatar';
import { HEADER_MENU_TOP } from '../DashboardHeader';
import { LogoutButton } from './LogoutButton';

export const UserMenu = () => (
	<Menu>
		<Menu.Button>
			<UserAvatar />
		</Menu.Button>
		<Menu.Dropdown top={HEADER_MENU_TOP}>
			<LogoutButton />
		</Menu.Dropdown>
	</Menu>
);
