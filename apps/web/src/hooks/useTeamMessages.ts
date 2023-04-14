import { useMutation, useQuery } from '@tanstack/react-query';

import { useCurrentTeam } from './useCurrentTeam';

import { createTeamMessage, getTeamMessages } from '@/services/teams.service';

export const useTeamMessages = () => {
	const { teamId } = useCurrentTeam();
	const { data: messages = [], ...rest } = useQuery({
		queryKey: ['team', teamId, 'messages'],
		queryFn: async () => {
			const { data } = await getTeamMessages({ teamId });
			return data;
		},
		cacheTime: 0,
	});

	const createTeamMessageMutation = useMutation({
		mutationFn: (content: string) => createTeamMessage({ teamId, content }),
	});

	return {
		messages,
		createTeamMessageMutation,
		...rest,
	};
};
