import type { Session, SessionData } from 'express-session';

export type ExpressSession = Session & Partial<SessionData>;
