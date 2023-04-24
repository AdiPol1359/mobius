import { joinTeamFormSchema } from './JoinTeamForm.schemas';

import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';

interface Options {
	readonly onSuccess: () => void;
}

export const useJoinTeamForm = ({ onSuccess }: Options) => {
	const { joinTeamMutation } = useTeams();
	const result = useZodForm(joinTeamFormSchema, {
		onSubmit: ({ code }) => {
			joinTeamMutation.mutate({ code }, { onSuccess });
		},
	});

	return result;
};
