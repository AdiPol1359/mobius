import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useUser } from './useUser';

import {
	createTeam,
	deleteTeam,
	getAllTeams,
	joinTeam,
	leaveTeam,
} from '@/services/teams.service';
import { showAPIErrorToast } from '@/utils/toast';

export const useTeams = () => {
	const { user } = useUser();
	const router = useRouter();
	const queryClient = useQueryClient();

	const QUERY_KEY = ['teams', user?.id];

	const { data: teams = [], ...rest } = useQuery({
		queryKey: QUERY_KEY,
		queryFn: async () => {
			const { data } = await getAllTeams({});
			return data;
		},
		staleTime: Infinity,
		cacheTime: Infinity,
		enabled: Boolean(user),
	});

	const navigateToTeam = (id: string) => {
		router.push(`/dashboard/teams/${id}`);
	};

	const invalidateTeams = () => {
		queryClient.invalidateQueries({ queryKey: QUERY_KEY });
	};

	const createTeamMutation = useMutation({
		mutationFn: createTeam,
		onSuccess: invalidateTeams,
		onError: (err) => showAPIErrorToast(err, createTeam.Error),
	});

	const joinTeamMutation = useMutation({
		mutationFn: joinTeam,
		onSuccess: invalidateTeams,
		onError: (err) => showAPIErrorToast(err, joinTeam.Error),
	});

	const deleteTeamMutation = useMutation({
		mutationFn: deleteTeam,
		onSuccess: invalidateTeams,
		onError: (err) => showAPIErrorToast(err, deleteTeam.Error),
	});

	const leaveTeamMutation = useMutation({
		mutationFn: leaveTeam,
		onSuccess: invalidateTeams,
		onError: (err) => showAPIErrorToast(err, leaveTeam.Error),
	});

	return {
		teams,
		navigateToTeam,
		createTeamMutation,
		joinTeamMutation,
		deleteTeamMutation,
		leaveTeamMutation,
		...rest,
	};
};
