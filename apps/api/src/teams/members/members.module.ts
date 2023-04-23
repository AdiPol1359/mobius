import { Module } from '@nestjs/common';

import { TeamsService } from '../teams.service';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

import { AuthModule } from '@/auth/auth.module';

@Module({
	imports: [AuthModule],
	controllers: [MembersController],
	providers: [TeamsService, MembersService],
})
export class MembersModule {}
