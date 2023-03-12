'use client';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';

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
			createTeamMutation.mutate(
				{ name },
				{
					onSuccess: ({ data }) => {
						onSuccess();
						navigateToTeam(data.id);
					},
				}
			);
		},
	});

	return (
		<form onSubmit={handleFormSubmit}>
			<Input
				type="text"
				placeholder="Enter team name"
				autoComplete="off"
				spellCheck={false}
				error={errors.name?.message}
				{...register('name')}
			/>
			<Button type="submit" variant="primary" className="mt-2 w-full">
				Create a new team
			</Button>
		</form>
	);
};
