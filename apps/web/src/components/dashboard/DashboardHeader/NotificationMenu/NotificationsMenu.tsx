'use client';

import { RiNotificationLine } from 'react-icons/ri';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';

import { NotificationList } from './NotificationList/NotificationList';

export const NotificationsMenu = () => (
	<Dropdown fullHeight>
		<Dropdown.Button className="relative text-xl">
			<RiNotificationLine />
			<div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
		</Dropdown.Button>
		<Dropdown.Items position="right">
			<NotificationList />
		</Dropdown.Items>
	</Dropdown>
);
