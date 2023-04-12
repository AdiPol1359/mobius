import { NotificationItem } from './NotificationItem';

import type { Notification } from '@/types';

type NotificationListProps = Readonly<{
	notifications: Notification[];
}>;

export const NotificationList = ({ notifications }: NotificationListProps) => (
	<ol className="custom-scrollbar max-h-96 overflow-auto">
		{notifications.map((notification) => (
			<NotificationItem key={notification.id} notification={notification} />
		))}
	</ol>
);
