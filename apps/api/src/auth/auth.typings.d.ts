import 'express';

import type { AppUser } from '@/users/users.types';

declare module 'express' {
	interface Request {
		user: AppUser;
	}
}
