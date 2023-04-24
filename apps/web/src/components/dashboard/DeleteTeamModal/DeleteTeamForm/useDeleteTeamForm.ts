import { deleteTeamFormSchema } from './DeleteTeamForm.schemas';

import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';

interface Options {
	readonly teamId: string;
}

export const useDeleteTeamForm = ({ teamId }: Options) => {
	const { deleteTeamMutation } = useTeams();
	const result = useZodForm(deleteTeamFormSchema, {
		onSubmit: ({ name }) => {
			deleteTeamMutation.mutate({
				teamId,
				name,
			});
		},
	});

	return result;
};
