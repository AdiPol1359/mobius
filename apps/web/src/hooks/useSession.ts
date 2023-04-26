import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useUser';

import { createSession, deleteMeSession } from '@/services/sessions.service';

export const useSession = () => {
	const queryClient = useQueryClient();

	const createSessionMutation = useMutation({
		mutationFn: createSession,
		onSuccess: ({ data }) => {
			queryClient.setQueryData(QUERY_KEY, data);
		},
	});

	const deleteSessionMutation = useMutation({
		mutationFn: deleteMeSession,
		onSuccess: () => {
			queryClient.setQueryData(QUERY_KEY, null);
		},
	});

	return { createSessionMutation, deleteSessionMutation };
};
