import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useCurrentTeam } from './useCurrentTeam';

import {
	deleteTeamMember,
	getTeamMembers,
	updateTeamMember,
} from '@/services/teams.service';

export const useTeamMembers = () => {
	const { teamId } = useCurrentTeam();

	const QUERY_KEY = ['team', teamId, 'members'];
	const queryClient = useQueryClient();

	const { data: members, ...rest } = useQuery({
		queryKey: QUERY_KEY,
		queryFn: async () => {
			const { data } = await getTeamMembers({ teamId });
			return data;
		},
		initialData: [],
	});

	const updateTeamMemberMutation = useMutation({
		mutationFn: ({
			userId,
			role,
		}: Omit<Parameters<typeof updateTeamMember>[0], 'teamId'>) =>
			updateTeamMember({ teamId, userId, role }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEY });
		},
	});

	const deleteTeamMemberMutation = useMutation({
		mutationFn: ({
			userId,
		}: Omit<Parameters<typeof deleteTeamMember>[0], 'teamId'>) =>
			deleteTeamMember({ teamId, userId }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEY });
		},
	});

	return {
		members,
		updateTeamMemberMutation,
		deleteTeamMemberMutation,
		...rest,
	};
};
