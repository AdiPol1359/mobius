'use client';

import { ModalForm } from '../../ModalForm';
import { deleteTeamFormSchema } from './DeleteTeamForm.schemas';

import { Input } from '@/components/common/Input/Input';
import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';

type DeleteTeamFormProps = Readonly<{
	teamId: string;
}>;

export const DeleteTeamForm = ({ teamId }: DeleteTeamFormProps) => {
	const { deleteTeamMutation } = useTeams();
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useZodForm(deleteTeamFormSchema, {
		onSubmit: ({ name }) => {
			deleteTeamMutation.mutate({
				teamId,
				name,
			});
		},
	});

	return (
		<ModalForm buttonText="Delete the team" onSubmit={handleFormSubmit}>
			<Input
				type="text"
				placeholder="Enter team name"
				error={errors.name?.message}
				{...register('name')}
			/>
		</ModalForm>
	);
};
