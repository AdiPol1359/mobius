import { MessageDto } from './dto/message.dto';
import { Message } from './messages.types';

export const mapMessageToMessageDto = ({
	id,
	content,
	createdAt,
	updatedAt,
	user,
}: Message): MessageDto => ({
	id,
	content,
	createdAt: createdAt.toISOString(),
	updatedAt: updatedAt.toISOString(),
	author: user,
});

export const mapMessagesToMessageDtos = (messages: Message[]) =>
	messages.map(mapMessageToMessageDto);
