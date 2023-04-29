import { useEffect } from 'react';

import { settingsPanelFormSchema } from './SettingsPanelForm.schemas';

import { useCurrentTeam } from '@/hooks/useCurrentTeam';
import { useZodForm } from '@/hooks/useZodForm';
import { getDirtyData } from '@/utils/form';

interface Options {
	readonly name: string;
	readonly onSuccess: () => void;
}

export const useSettingsPanelForm = ({ name, onSuccess }: Options) => {
	const { teamId, updateTeamMutation } = useCurrentTeam();
	const { formState, reset, ...rest } = useZodForm(
		settingsPanelFormSchema,
		{
			onSubmit: (data) => {
				const { name } = getDirtyData(formState.dirtyFields, data);

				updateTeamMutation.mutate({ teamId, name }, { onSuccess });
			},
		},
		{ defaultValues: { name } }
	);

	useEffect(() => {
		reset({ name });
	}, [name, reset]);

	return { isLoading: updateTeamMutation.isLoading, formState, ...rest };
};
