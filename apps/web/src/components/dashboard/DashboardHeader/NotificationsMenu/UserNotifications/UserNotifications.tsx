import { EmptyNotificationsAlert } from './EmptyNotificationsAlert';
import { NotificationList } from './NotificationList/NotificationList';

import { LoadingContent } from '@/components/dashboard/LoadingContent';
import { useNotifications } from '@/hooks/useNotifications';

export const UserNotifications = () => {
	const { notifications, isLoading } = useNotifications();

	return (
		<LoadingContent isLoading={isLoading} size="sm">
			{notifications.length === 0 ? (
				<EmptyNotificationsAlert />
			) : (
				<NotificationList notifications={notifications} />
			)}
		</LoadingContent>
	);
};
