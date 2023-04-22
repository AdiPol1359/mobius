import { SingleMessage } from './SingleMessage';

import { useUser } from '@/hooks/useUser';

import type { Message } from '@/types';

type MessageListProps = Readonly<{
	messages: Message[];
}>;

export const MessageList = ({ messages }: MessageListProps) => {
	const { user } = useUser();

	return (
		<ol className="custom-scrollbar flex flex-1 flex-col-reverse gap-y-8 overflow-auto pb-4">
			{messages.map((message) => (
				<li key={message.id}>
					<SingleMessage
						message={message}
						me={message.author.id === user?.id}
					/>
				</li>
			))}
		</ol>
	);
};
