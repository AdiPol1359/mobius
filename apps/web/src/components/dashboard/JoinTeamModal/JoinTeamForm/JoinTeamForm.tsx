'use client';

import { toast } from 'react-hot-toast';

import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';
import { DEFAULT_ERROR_MESSAGE } from '@/lib/constants';
import { joinTeam } from '@/services/teams.service';

import { joinTeamFormSchema } from './JoinTeamForm.schemas';

type JoinTeamFormProps = Readonly<{
	onSuccess: () => void;
}>;

export const JoinTeamForm = ({ onSuccess }: JoinTeamFormProps) => {
	const { joinTeamMutation, navigateToTeam } = useTeams();
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useZodForm(joinTeamFormSchema, {
		onSubmit: ({ code }) => {
			const mutation = joinTeamMutation.mutateAsync(
				{ code },
				{
					onSuccess: ({ data }) => {
						onSuccess();
						navigateToTeam(data.id);
					},
				}
			);

			toast.promise(mutation, {
				loading: 'Joining a team...',
				success: ({ data: { name } }) => `Successfully joined to ${name}!`,
				error: (err) => {
					if (err instanceof joinTeam.Error) {
						return err.getActualType().data.message;
					}

					return DEFAULT_ERROR_MESSAGE;
				},
			});
		},
	});

	return (
		<form onSubmit={handleFormSubmit}>
			<Input
				type="text"
				placeholder="Enter team code"
				autoComplete="off"
				spellCheck={false}
				error={errors.code?.message}
				{...register('code')}
			/>
			<Button type="submit" variant="primary" className="mt-2 w-full">
				Join the team
			</Button>
		</form>
	);
};