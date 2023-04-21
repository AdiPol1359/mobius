'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Notification } from './Notification';

import { useUser } from '@/hooks/useUser';
import { notificationsSocket } from '@/lib/socket';
import { useNotificationsContext } from '@/providers/NotificationsProvider';

export const DashboardNotifications = () => {
	const { user } = useUser();
	const { enableIsUnread } = useNotificationsContext();

	useEffect(() => {
		if (!user) return;

		const onNotificationEvent = (content: string) => {
			toast.custom(({ visible }) => (
				<Notification isActive={visible} content={content} />
			));
			enableIsUnread();
		};

		notificationsSocket.on(`notification:${user.id}`, onNotificationEvent);

		return () => {
			notificationsSocket.off(`notification:${user.id}`, onNotificationEvent);
		};
	}, [user, enableIsUnread]);

	return null;
};
