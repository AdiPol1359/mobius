import { useInfiniteQuery } from '@tanstack/react-query';

import { useUser } from './useUser';

import { useNotificationsContext } from '@/providers/NotificationsProvider';
import { getAllNotifications } from '@/services/notifications.service';

const NOTIFICATIONS_LIMIT = 4;

export const useNotifications = () => {
	const { user } = useUser();
	const { disableIsUnread } = useNotificationsContext();
	const { data, ...rest } = useInfiniteQuery({
		queryKey: ['notifications', user?.id],
		queryFn: async ({ pageParam }) => {
			const { data } = await getAllNotifications({
				offset: pageParam,
				limit: NOTIFICATIONS_LIMIT,
			});
			return data;
		},
		getNextPageParam: (lastPage, pages) =>
			lastPage.length === NOTIFICATIONS_LIMIT
				? pages.length * NOTIFICATIONS_LIMIT
				: undefined,
		enabled: Boolean(user),
		onSuccess: () => {
			disableIsUnread();
		},
	});

	const notifications = data?.pages?.flat() || [];

	return { notifications, ...rest };
};
