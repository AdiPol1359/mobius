import { AppUser } from '@/users/users.types';

export const createNotificationEvent = Symbol('CreateNotificationEvent');

export class CreateNotificationEvent {
	constructor(public readonly user: AppUser, public readonly content: string) {}
}
