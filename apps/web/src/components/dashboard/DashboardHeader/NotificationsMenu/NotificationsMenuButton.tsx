import { RiNotificationLine } from 'react-icons/ri';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { useNotificationsContext } from '@/providers/NotificationsProvider';

export const NotificationsMenuButton = () => {
	const { isUnread } = useNotificationsContext();

	return (
		<Dropdown.Button className="relative text-xl">
			<RiNotificationLine />
			{isUnread && (
				<div className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-600" />
			)}
		</Dropdown.Button>
	);
};
