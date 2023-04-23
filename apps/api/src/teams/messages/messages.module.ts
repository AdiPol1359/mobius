import { Module } from '@nestjs/common';

import { TeamsGateway } from '../teams.gateway';
import { TeamsService } from '../teams.service';
import { MessagesContoller } from './messages.controller';
import { MessagesService } from './messages.service';

import { AuthModule } from '@/auth/auth.module';

@Module({
	imports: [AuthModule],
	controllers: [MessagesContoller],
	providers: [TeamsGateway, TeamsService, MessagesService],
})
export class MessagesModule {}
