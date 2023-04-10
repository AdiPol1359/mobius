import type { components } from 'openapi-types';

export type ServerToClientNotificationsEvents = {
	readonly [P in `notification:${number}`]: (content: string) => void;
};

export interface TeamsServerToClientEvents {
	readonly message: (data: components['schemas']['MessageDto']) => void;
}

export interface TeamsClientToServerEvents {
	readonly join: (teamId: string) => void;
	readonly leave: (teamId: string) => void;
}
