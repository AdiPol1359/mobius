import { LoadingContent } from '../../LoadingContent';
import { useSocketMessagesContext } from '../SocketMessagesProvider';
import { MessageList } from './MessageList/MessageList';

import { useTeamMessages } from '@/hooks/useTeamMessages';

export const ConversationMessages = () => {
	const { messages: socketMessages } = useSocketMessagesContext();
	const { messages: cacheMessages, isLoading } = useTeamMessages();

	const messages = [...socketMessages, ...cacheMessages];

	return (
		<LoadingContent isLoading={isLoading}>
			<MessageList messages={messages} />
		</LoadingContent>
	);
};
