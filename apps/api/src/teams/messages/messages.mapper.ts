import { MessageDto } from './dto/message.dto';
import { Message } from './messages.types';

export const mapMessageToMessageDto = ({
	id,
	content,
	createdAt,
	updatedAt,
	user: { id: userId, firstName, lastName },
}: Message): MessageDto => ({
	id,
	content,
	createdAt: createdAt.toISOString(),
	updatedAt: updatedAt.toISOString(),
	author: { id: userId, firstName, lastName },
});

export const mapMessagesToMessageDtos = (messages: Message[]) =>
	messages.map(mapMessageToMessageDto);
