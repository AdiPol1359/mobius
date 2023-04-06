import type { AppUser } from '@/users/users.types';

import 'express';

declare module 'express' {
	interface Request {
		user: AppUser;
	}
}
