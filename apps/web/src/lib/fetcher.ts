import type { paths } from 'openapi-types';
import { Fetcher } from 'openapi-typescript-fetch';

export const fetcher = Fetcher.for<paths>();

fetcher.configure({
	baseUrl: process.env.NEXT_PUBLIC_API_URL,
	init: {
		credentials: 'include',
	},
});
