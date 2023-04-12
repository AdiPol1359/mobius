'use client';

import { LoadingContent } from '../LoadingContent';
import { TeamMessageList } from './TeamMessageList/TeamMessageList';
import { TeamMessagesProvider } from './TeamMessagesProvider';

import { useTeamMessages } from '@/hooks/useTeamMessages';

export const TeamMessages = () => {
	const { isLoading } = useTeamMessages();

	return (
		<TeamMessagesProvider>
			<LoadingContent isLoading={isLoading}>
				<TeamMessageList />
			</LoadingContent>
		</TeamMessagesProvider>
	);
};
