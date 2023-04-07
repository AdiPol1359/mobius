import { ModalForm } from '../../ModalForm';
import { joinTeamFormSchema } from './JoinTeamForm.schemas';

import { Input } from '@/components/common/Input/Input';
import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';

type JoinTeamFormProps = Readonly<{
	onSuccess: () => void;
}>;

export const JoinTeamForm = ({ onSuccess }: JoinTeamFormProps) => {
	const { joinTeamMutation, navigateToTeam } = useTeams();
	const {
		handleFormSubmit,
		register,
		formState: { errors, isSubmitted },
	} = useZodForm(joinTeamFormSchema, {
		onSubmit: ({ code }) => {
			joinTeamMutation.mutate(
				{ code },
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
		<ModalForm
			buttonText="Join the team"
			disabled={isSubmitted}
			onSubmit={handleFormSubmit}
		>
			<Input
				type="text"
				placeholder="Enter team code"
				autoComplete="off"
				spellCheck={false}
				error={errors.code?.message}
				{...register('code')}
			/>
		</ModalForm>
	);
};
