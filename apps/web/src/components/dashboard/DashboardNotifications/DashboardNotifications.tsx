'use client';

import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Notification } from './Notification';

import { useUser } from '@/hooks/useUser';
import { notificationsSocket } from '@/lib/socket';

export const DashboardNotifications = () => {
	const { user } = useUser();

	useEffect(() => {
		if (!user) return;

		const onNotificationEvent = (content: string) => {
			toast.custom(({ visible }) => (
				<Notification isActive={visible} content={content} />
			));
		};

		notificationsSocket.on(`notification:${user.id}`, onNotificationEvent);

		return () => {
			notificationsSocket.off(`notification:${user.id}`, onNotificationEvent);
		};
	}, [user]);

	return null;
};
