import { NotificationItem } from './NotificationItem';

import { useNotifications } from '@/hooks/useNotifications';

export const NotificationList = () => {
	const { notifications } = useNotifications();

	if (notifications.length === 0) {
		return <p>You don&apos;t have any notifications yet!</p>;
	}

	return (
		<ol className="custom-scrollbar max-h-96 overflow-auto">
			{notifications.map((notification) => (
				<NotificationItem key={notification.id} notification={notification} />
			))}
		</ol>
	);
};
