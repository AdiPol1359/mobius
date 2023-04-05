import { fetcher } from '@/lib/fetcher';

export const getAllNotifications = fetcher
	.path('/notifications')
	.method('get')
	.create();
