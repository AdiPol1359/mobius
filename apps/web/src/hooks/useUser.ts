import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
	createSession,
	deleteSession,
	getMeSession,
} from '@/services/sessions.service';
import { createUser } from '@/services/users.service';

const QUERY_KEY = ['user'];

export const useUser = () => {
	const queryClient = useQueryClient();
	const { data: user, ...rest } = useQuery({
		queryKey: QUERY_KEY,
		queryFn: async () => {
			try {
				const { data } = await getMeSession({});
				return data;
			} catch (err) {
				if (
					err instanceof getMeSession.Error &&
					err.getActualType().status === 401
				) {
					return null;
				}

				throw err;
			}
		},
		staleTime: Infinity,
	});

	const registerMutation = useMutation({
		mutationFn: createUser,
	});

	const loginMutation = useMutation({
		mutationFn: createSession,
		onSuccess: ({ data }) => {
			queryClient.setQueryData(QUERY_KEY, data);
		},
	});

	const logoutMutation = useMutation({
		mutationFn: deleteSession,
		onSuccess: () => {
			queryClient.setQueryData(QUERY_KEY, null);
		},
	});

	return { user, registerMutation, loginMutation, logoutMutation, ...rest };
};
