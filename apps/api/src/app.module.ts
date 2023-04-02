import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { validate } from './app.configuration';
import { NotificationsModule } from './notifications/notifications.module';
import { PrismaModule } from './prisma/prisma.module';
import { RedisModule } from './redis/redis.module';
import { SessionsModule } from './sessions/sessions.module';
import { TeamsModule } from './teams/teams.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, validate }),
		EventEmitterModule.forRoot(),
		PrismaModule,
		RedisModule,
		UsersModule,
		SessionsModule,
		TeamsModule,
		NotificationsModule,
	],
})
export class AppModule {}
