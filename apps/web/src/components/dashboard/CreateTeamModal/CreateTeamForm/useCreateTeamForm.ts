import { createTeamFormSchema } from './CreateTeamForm.schemas';

import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';

interface Options {
	readonly onSuccess: () => void;
}

export const useCreateTeamForm = ({ onSuccess }: Options) => {
	const { createTeamMutation } = useTeams();
	const result = useZodForm(createTeamFormSchema, {
		onSubmit: ({ name }) => {
			createTeamMutation.mutate({ name }, { onSuccess });
		},
	});

	return result;
};
