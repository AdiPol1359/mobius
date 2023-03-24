import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import {
	createTeam,
	deleteTeam,
	getAllTeams,
	joinTeam,
	leaveTeam,
} from '@/services/teams.service';

const QUERY_KEY = ['teams'];

export const useTeams = () => {
	const router = useRouter();
	const queryClient = useQueryClient();

	const result = useQuery({
		queryKey: QUERY_KEY,
		queryFn: () => getAllTeams({}),
	});

	const invalidateTeams = () => {
		queryClient.invalidateQueries({ queryKey: QUERY_KEY });
	};

	const createTeamMutation = useMutation({
		mutationFn: createTeam,
		onSuccess: invalidateTeams,
	});

	const joinTeamMutation = useMutation({
		mutationFn: joinTeam,
		onSuccess: invalidateTeams,
	});

	const deleteTeamMutation = useMutation({
		mutationFn: deleteTeam,
		onSuccess: invalidateTeams,
	});

	const leaveTeamMutation = useMutation({
		mutationFn: leaveTeam,
		onSuccess: invalidateTeams,
	});

	const navigateToTeam = (id: string) => {
		router.push(`/dashboard/teams/${id}`);
	};

	return {
		createTeamMutation,
		joinTeamMutation,
		deleteTeamMutation,
		leaveTeamMutation,
		navigateToTeam,
		...result,
	};
};
