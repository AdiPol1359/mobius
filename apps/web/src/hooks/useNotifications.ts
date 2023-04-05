import { useQuery } from '@tanstack/react-query';

import { getAllNotifications } from '@/services/notifications.service';

export const useNotifications = () => {
	const { data: notifications, ...rest } = useQuery({
		queryKey: ['notifications'],
		queryFn: async () => {
			const { data } = await getAllNotifications({});
			return data;
		},
		initialData: [],
	});

	return { notifications, ...rest };
};
