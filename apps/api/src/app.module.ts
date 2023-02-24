import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { validate } from './app.configuration';
import { PrismaModule } from './prisma/prisma.module';
import { SessionsModule } from './sessions/sessions.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, validate }),
		PrismaModule,
		UsersModule,
		SessionsModule,
	],
})
export class AppModule {}
