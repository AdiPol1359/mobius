import { SessionData, Store } from 'express-session';
import ms from 'ms';
import { RedisClientType } from 'redis';

const NAMESPACE = 'session:';
const DEFAULT_TTL = ms('1h');

export class RedisStore extends Store {
	constructor(private readonly redis: RedisClientType) {
		super();
	}

	async get(
		sessionId: string,
		callback: (err: any, session?: SessionData | null | undefined) => void
	): Promise<void> {
		try {
			const session = await this.redis.get(`${NAMESPACE}${sessionId}`);
			const data = session ? (JSON.parse(session) as SessionData) : null;

			callback(null, data);
		} catch (err) {
			callback(err);
		}
	}

	set(
		sessionId: string,
		session: SessionData,
		callback?: ((err?: any) => void) | undefined
	): void {
		if (!callback) return;

		const data = JSON.stringify(session);
		const ttl = session.cookie.maxAge || DEFAULT_TTL;

		this.redis
			.set(`${NAMESPACE}${sessionId}`, data, { PX: ttl })
			.then(() => callback())
			.catch(callback);
	}

	destroy(
		sessionId: string,
		callback?: ((err?: any) => void) | undefined
	): void {
		if (!callback) return;

		this.redis
			.del(`${NAMESPACE}${sessionId}`)
			.then(() => callback())
			.catch(callback);
	}

	async all(
		callback: (
			err: any,
			obj?: SessionData[] | { [sid: string]: SessionData } | null | undefined
		) => void
	): Promise<void> {
		const keys = await this.getSessionKeys();

		if (keys.length === 0) {
			return callback(null, []);
		}

		try {
			const sessions = (await this.redis.mGet(keys)) as string[];
			const data = sessions.map<SessionData>((session) => JSON.parse(session));

			callback(null, data);
		} catch (err) {
			callback(err);
		}
	}

	async clear(callback?: ((err?: any) => void) | undefined): Promise<void> {
		if (!callback) return;

		const keys = await this.getSessionKeys();

		try {
			if (keys.length > 0) {
				await this.redis.del(keys);
			}

			callback();
		} catch (err) {
			callback(err);
		}
	}

	length(callback: (err: any, length?: number | undefined) => void): void {
		this.getSessionKeys()
			.then((keys) => callback(null, keys.length))
			.catch(callback);
	}

	touch(
		sessionId: string,
		session: SessionData,
		callback?: (() => void) | undefined
	): void {
		if (!callback) return;

		const ttl = session.cookie.maxAge || DEFAULT_TTL;

		this.redis.pExpire(`${NAMESPACE}${sessionId}`, ttl).finally(callback);
	}

	private getSessionKeys(): Promise<string[]> {
		return this.redis.keys(`${NAMESPACE}*`);
	}
}
