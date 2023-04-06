import { ConfigService } from '@nestjs/config';
import { TypeOf, z } from 'zod';

const NUMBER_REGEX = /^\d+$/;

const AppConfigSchema = z.object({
	HOST: z.string().nonempty(),
	PORT: z.string().regex(NUMBER_REGEX).transform(Number),
	SALT_OR_ROUNDS: z.union([
		z.string().regex(NUMBER_REGEX).transform(Number),
		z.string(),
	]),
	CORS_ORIGIN: z.string().nonempty(),
	SESSION_COOKIE_NAME: z.string().nonempty(),
	SESSION_COOKIE_SECRET: z.string().nonempty(),
	SESSION_COOKIE_MAX_AGE: z.string().nonempty(),
	REDIS_URL: z.string().nonempty(),
});

export const validate = (data: Record<string, unknown>) =>
	AppConfigSchema.parse(data);

export type AppConfigService = ConfigService<
	TypeOf<typeof AppConfigSchema>,
	true
>;
