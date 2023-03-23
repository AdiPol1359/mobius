import { fetcher } from '@/lib/fetcher';

export const getMeSession = fetcher.path('/sessions/me').method('get').create();
export const createSession = fetcher.path('/sessions').method('post').create();
export const deleteMeSession = fetcher
	.path('/sessions/me')
	.method('delete')
	.create();
