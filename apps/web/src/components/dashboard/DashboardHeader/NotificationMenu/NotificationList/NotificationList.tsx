import { NotificationItem } from './NotificationItem';

import { Spinner } from '@/components/common/Spinner/Spinner';
import { useNotifications } from '@/hooks/useNotifications';

export const NotificationList = () => {
	const { notifications, isLoading } = useNotifications();

	if (isLoading) {
		return (
			<div className="my-2.5 flex justify-center">
				<Spinner size="sm" />
			</div>
		);
	}

	if (notifications?.length === 0) {
		return <p>You don&apos;t have any notifications yet!</p>;
	}

	return (
		<ol className="custom-scrollbar max-h-96 overflow-auto">
			{notifications?.map((notification) => (
				<NotificationItem key={notification.id} notification={notification} />
			))}
		</ol>
	);
};
