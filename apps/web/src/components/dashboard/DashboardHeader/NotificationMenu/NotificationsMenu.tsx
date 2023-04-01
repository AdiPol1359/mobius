'use client';

import { RiNotificationLine } from 'react-icons/ri';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';

import { Notification } from './Notification';

export const NotificationsMenu = () => (
	<Dropdown fullHeight>
		<Dropdown.Button className="relative text-xl">
			<RiNotificationLine />
			<div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600" />
		</Dropdown.Button>
		<Dropdown.Items position="right">
			<ol>
				<Notification
					time={1680345000000}
					content="mobius failed to deploy in the preview envorinment"
				/>
				<Notification
					time={1680316200000}
					content="mobius failed to deploy in the preview envorinment"
				/>
				<Notification
					time={1679913480000}
					content="mobius failed to deploy in the preview envorinment"
				/>
			</ol>
		</Dropdown.Items>
	</Dropdown>
);
