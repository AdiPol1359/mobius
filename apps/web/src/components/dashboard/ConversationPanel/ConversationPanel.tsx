'use client';

import { ConversationForm } from './ConversationForm/ConversationForm';
import { ConversationMessages } from './ConversationMessages/ConversationMessages';
import { SocketMessagesProvider } from './SocketMessagesProvider';

import { Tabs } from '@/components/common/Tabs/Tabs';

export const ConversationPanel = () => (
	<Tabs.Panel className="flex flex-1 flex-col overflow-auto py-2.5">
		<SocketMessagesProvider>
			<ConversationMessages />
		</SocketMessagesProvider>
		<ConversationForm />
	</Tabs.Panel>
);
