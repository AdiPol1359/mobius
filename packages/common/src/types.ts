import type { components } from 'openapi-types';

export type NotificationsServerToClientEvents = {
	readonly [P in `notification:${number}`]: (content: string) => void;
};

export interface TeamsServerToClientEvents {
	readonly message: (message: components['schemas']['MessageDto']) => void;
}

export interface TeamsClientToServerEvents {
	readonly join: (teamId: string) => void;
	readonly leave: (teamId: string) => void;
}
