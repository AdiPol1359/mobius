import { fetcher } from '@/lib/fetcher';

export const getMeSession = fetcher.path('/sessions/me').method('get').create();
export const createSession = fetcher.path('/sessions').method('post').create();
export const deleteSession = fetcher
	.path('/sessions')
	.method('delete')
	.create();
