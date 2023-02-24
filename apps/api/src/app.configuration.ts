import { ConfigService } from '@nestjs/config';
import { TypeOf, z } from 'zod';

const NUMBER_REGEX = /^\d+$/;

const AppConfigSchema = z.object({
	HOST: z.string().min(1),
	PORT: z.string().regex(NUMBER_REGEX).transform(Number),
	SALT_OR_ROUNDS: z.union([
		z.string().regex(NUMBER_REGEX).transform(Number),
		z.string(),
	]),
	SESSION_COOKIE_NAME: z.string().min(1),
	SESSION_COOKIE_SECRET: z.string().min(1),
	SESSION_COOKIE_MAX_AGE: z.string().min(1),
});

export const validate = (data: Record<string, unknown>) =>
	AppConfigSchema.parse(data);

export type AppConfigService = ConfigService<
	TypeOf<typeof AppConfigSchema>,
	true
>;
