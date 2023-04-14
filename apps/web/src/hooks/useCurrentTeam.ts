import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { getTeamById } from '@/services/teams.service';

export const useCurrentTeam = () => {
	const { slug: teamId } = useParams();
	const { data: team, ...rest } = useQuery({
		queryKey: ['team', teamId],
		queryFn: async () => {
			const { data } = await getTeamById({ teamId });
			return data;
		},
	});

	return { team, teamId, ...rest };
};
