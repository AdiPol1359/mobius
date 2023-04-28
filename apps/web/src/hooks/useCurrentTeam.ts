import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { getTeamById, updateTeam } from '@/services/teams.service';

export const useCurrentTeam = () => {
	const queryClient = useQueryClient();
	const { slug: teamId } = useParams();

	const QUERY_KEY = ['team', teamId];

	const { data: team, ...rest } = useQuery({
		queryKey: QUERY_KEY,
		queryFn: async () => {
			const { data } = await getTeamById({ teamId });
			return data;
		},
	});

	const updateTeamMutation = useMutation({
		mutationFn: updateTeam,
		onSuccess: ({ data }) => {
			queryClient.setQueryData(QUERY_KEY, data);
		},
	});

	return { team, teamId, updateTeamMutation, ...rest };
};
