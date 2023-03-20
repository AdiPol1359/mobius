import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import {
	createTeam,
	deleteTeam,
	getAllTeams,
	joinTeam,
} from '@/services/teams.service';

const QUERY_KEY = ['teams'];

export const useTeams = () => {
	const router = useRouter();
	const queryClient = useQueryClient();

	const result = useQuery({
		queryKey: QUERY_KEY,
		queryFn: () => getAllTeams({}),
		staleTime: Infinity,
		cacheTime: Infinity,
	});

	const createTeamMutation = useMutation({
		mutationFn: createTeam,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEY });
		},
	});

	const joinTeamMutation = useMutation({
		mutationFn: joinTeam,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEY });
		},
	});

	const deleteTeamMutation = useMutation({
		mutationFn: deleteTeam,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: QUERY_KEY });
		},
	});

	const navigateToTeam = (id: string) => {
		router.push(`/dashboard/teams/${id}`);
	};

	return {
		createTeamMutation,
		joinTeamMutation,
		deleteTeamMutation,
		navigateToTeam,
		...result,
	};
};
