import { useInfiniteQuery } from '@tanstack/react-query';

import { getAllNotifications } from '@/services/notifications.service';

const NOTIFICATIONS_LIMIT = 4;

export const useNotifications = () => {
	const { data, ...rest } = useInfiniteQuery({
		queryKey: ['notifications'],
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
	});

	const notifications = data?.pages?.flat() || [];

	return { notifications, ...rest };
};
