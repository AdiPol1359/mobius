import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { createSafeContext } from '@/lib/createSafeContext';
import { teamsSocket } from '@/lib/socket';

import type { ReactNode } from 'react';

import type { Message } from '@/types';

interface TeamMessagesContextValue {
	readonly messages: Message[];
}

const [TeamMessagesContextProvider, useTeamMessagesContext] =
	createSafeContext<TeamMessagesContextValue>();

const TeamMessagesProvider = ({
	children,
}: {
	readonly children: ReactNode;
}) => {
	const { slug } = useParams();
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {
		const onMessageEvent = (message: Message) => {
			setMessages((prev) => [message, ...prev]);
		};

		teamsSocket.emit('join', slug);
		teamsSocket.on('message', onMessageEvent);

		return () => {
			teamsSocket.emit('leave', slug);
			teamsSocket.off('message', onMessageEvent);
		};
	}, [slug]);

	return (
		<TeamMessagesContextProvider value={{ messages }}>
			{children}
		</TeamMessagesContextProvider>
	);
};

export { TeamMessagesProvider, useTeamMessagesContext };
