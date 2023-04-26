import { useMutation, useQuery } from '@tanstack/react-query';

import { getMeSession } from '@/services/sessions.service';
import { createUser } from '@/services/users.service';

export const QUERY_KEY = ['user'];

export const useUser = () => {
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

	const createUserMutation = useMutation({
		mutationFn: createUser,
	});

	return {
		user,
		createUserMutation,
		...rest,
	};
};
