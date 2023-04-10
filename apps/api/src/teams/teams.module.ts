import { Module } from '@nestjs/common';

import { MessagesService } from './messages/messages.service';
import { TeamsController } from './teams.controller';
import { TeamsGateway } from './teams.gateway';
import { TeamsService } from './teams.service';

import { AuthModule } from '@/auth/auth.module';

@Module({
	imports: [AuthModule],
	controllers: [TeamsController],
	providers: [TeamsGateway, TeamsService, MessagesService],
})
export class TeamsModule {}
