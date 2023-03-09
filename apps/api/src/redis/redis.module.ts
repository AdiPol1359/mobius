import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';

import { AppConfigService } from '@/app.configuration';

export const REDIS_TOKEN = Symbol('REDIS_TOKEN');

@Global()
@Module({
	providers: [
		{
			provide: REDIS_TOKEN,
			useFactory: async (configService: AppConfigService) => {
				const client = createClient({ url: configService.get('REDIS_URL') });

				await client.connect();
				return client;
			},
			inject: [ConfigService],
		},
	],
})
export class RedisModule {}
