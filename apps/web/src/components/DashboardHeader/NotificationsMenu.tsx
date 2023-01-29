'use client';

import { RiNotificationLine } from 'react-icons/ri';

import { Menu } from '@/components/Menu/Menu';

export const NotificationsMenu = () => (
	<Menu>
		<Menu.Button className="relative text-xl">
			<RiNotificationLine />
			<div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
		</Menu.Button>
		<Menu.Dropdown>notifications menu</Menu.Dropdown>
	</Menu>
);
