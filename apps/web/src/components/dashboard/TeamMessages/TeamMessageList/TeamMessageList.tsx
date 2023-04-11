import { useTeamMessagesContext } from '../TeamMessagesProvider';
import { TeamMessage } from './TeamMessage';

import { Spinner } from '@/components/common/Spinner/Spinner';
import { useTeamMessages } from '@/hooks/useTeamMessages';
import { useUser } from '@/hooks/useUser';

export const TeamMessageList = () => {
	const { user } = useUser();
	const { messages: wsMessages } = useTeamMessagesContext();
	const { messages: cacheMessages, isLoading } = useTeamMessages();

	if (isLoading) {
		return (
			<div className="flex flex-1 items-center justify-center">
				<Spinner />
			</div>
		);
	}

	return (
		<ol className="custom-scrollbar mt-2 flex flex-1 flex-col-reverse gap-y-8 overflow-auto pb-4">
			{[...wsMessages, ...cacheMessages].map((message) => (
				<li key={message.id}>
					<TeamMessage message={message} me={message.author.id === user?.id} />
				</li>
			))}
		</ol>
	);
};
