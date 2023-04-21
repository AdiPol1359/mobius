'use client';

import { LoadMoreButton } from './LoadMoreButton';
import { NotificationsMenuButton } from './NotificationsMenuButton';
import { UserNotifications } from './UserNotifications/UserNotifications';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';

export const NotificationsMenu = () => (
	<Dropdown fullHeight>
		<NotificationsMenuButton />
		<Dropdown.Items position="right">
			<UserNotifications />
			<LoadMoreButton />
		</Dropdown.Items>
	</Dropdown>
);
