import type { components } from 'openapi-types';

export type Team = components['schemas']['TeamDto'];
export type Notification = components['schemas']['NotificationDto'];
export type Message = components['schemas']['MessageDto'];
export type Member = components['schemas']['MemberDto'];

export type TeamRole = NonNullable<Team['role']>;
