import { useEffect, useState } from 'react';

import { useCurrentTeam } from '@/hooks/useCurrentTeam';
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
	const { teamId } = useCurrentTeam();
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {
		const onMessageEvent = (message: Message) => {
			setMessages((prev) => [message, ...prev]);
		};

		teamsSocket.emit('join', teamId);
		teamsSocket.on('message', onMessageEvent);

		return () => {
			teamsSocket.emit('leave', teamId);
			teamsSocket.off('message', onMessageEvent);
		};
	}, [teamId]);

	return (
		<TeamMessagesContextProvider value={{ messages }}>
			{children}
		</TeamMessagesContextProvider>
	);
};

export { TeamMessagesProvider, useTeamMessagesContext };
