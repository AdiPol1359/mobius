import { Module } from '@nestjs/common';

import { MembersModule } from './members/members.module';
import { MessagesModule } from './messages/messages.module';
import { MessagesService } from './messages/messages.service';
import { TeamsController } from './teams.controller';
import { TeamsGateway } from './teams.gateway';
import { TeamsService } from './teams.service';

import { AuthModule } from '@/auth/auth.module';

@Module({
	imports: [AuthModule, MessagesModule, MembersModule],
	controllers: [TeamsController],
	providers: [TeamsGateway, TeamsService, MessagesService],
})
export class TeamsModule {}
