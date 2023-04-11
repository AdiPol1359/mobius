'use client';

import { TeamMessageList } from './TeamMessageList/TeamMessageList';
import { TeamMessagesProvider } from './TeamMessagesProvider';

export const TeamMessages = () => (
	<TeamMessagesProvider>
		<TeamMessageList />
	</TeamMessagesProvider>
);
