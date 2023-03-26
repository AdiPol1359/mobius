'use client';

import { toast } from 'react-hot-toast';

import { Input } from '@/components/common/Input/Input';
import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';
import { DEFAULT_ERROR_MESSAGE } from '@/lib/constants';
import { deleteTeam } from '@/services/teams.service';

import { ModalForm } from '../../ModalForm';
import { deleteTeamFormSchema } from './DeleteTeamForm.schemas';

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
			const mutation = deleteTeamMutation.mutateAsync({
				teamId,
				name,
			});

			toast.promise(mutation, {
				loading: 'Loading...',
				success: ({ data: { name } }) => `Successfully deleted ${name} team!`,
				error: (err) => {
					if (err instanceof deleteTeam.Error) {
						return err.getActualType().data.message;
					}

					return DEFAULT_ERROR_MESSAGE;
				},
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
