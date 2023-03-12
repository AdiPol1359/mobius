import { useQuery } from '@tanstack/react-query';

import { getAllTeams } from '@/services/teams.service';

export const useTeams = () => {
	const result = useQuery({
		queryKey: ['teams'],
		queryFn: () => getAllTeams({}),
		staleTime: Infinity,
		cacheTime: Infinity,
	});

	return result;
};
