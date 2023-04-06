import type { User } from '@/types';

import { ChatMessage } from './ChatMessage';

const user: User = {
	id: 1,
	email: 'foo@gmail.com',
	firstName: 'John',
	lastName: 'Burton',
};

export const ChatMessageList = () => (
	<ol className="mt-2 flex-1 space-y-8 overflow-auto pb-4">
		<li>
			<ChatMessage
				user={user}
				createdAt="2023-06-04T11:00:00"
				content="message 1"
				me
			/>
		</li>
		<li>
			<ChatMessage
				user={user}
				createdAt="2023-06-04T11:00:00"
				content="message 2"
			/>
		</li>
		<li>
			<ChatMessage
				user={user}
				createdAt="2023-06-04T11:00:00"
				content="message 3"
			/>
		</li>
	</ol>
);
