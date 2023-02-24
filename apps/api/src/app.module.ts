import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { SessionsModule } from './sessions/sessions.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [PrismaModule, UsersModule, SessionsModule],
})
export class AppModule {}
