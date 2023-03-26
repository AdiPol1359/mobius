'use client';

import { toast } from 'react-hot-toast';

import { Input } from '@/components/common/Input/Input';
import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';
import { DEFAULT_ERROR_MESSAGE } from '@/lib/constants';

import { ModalForm } from '../../ModalForm';
import { createTeamFormSchema } from './CreateTeamForm.schemas';

type CreateTeamFormProps = Readonly<{
	onSuccess: () => void;
}>;

export const CreateTeamForm = ({ onSuccess }: CreateTeamFormProps) => {
	const { createTeamMutation, navigateToTeam } = useTeams();
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useZodForm(createTeamFormSchema, {
		onSubmit: ({ name }) => {
			const mutation = createTeamMutation.mutateAsync(
				{ name },
				{
					onSuccess: ({ data }) => {
						onSuccess();
						navigateToTeam(data.id);
					},
				}
			);

			toast.promise(mutation, {
				loading: 'Creating a new team...',
				success: ({ data: { name } }) => `Successfully created ${name} team!`,
				error: DEFAULT_ERROR_MESSAGE,
			});
		},
	});

	return (
		<ModalForm buttonText="Create a new team" onSubmit={handleFormSubmit}>
			<Input
				type="text"
				placeholder="Enter team name"
				autoComplete="off"
				spellCheck={false}
				error={errors.name?.message}
				{...register('name')}
			/>
		</ModalForm>
	);
};
