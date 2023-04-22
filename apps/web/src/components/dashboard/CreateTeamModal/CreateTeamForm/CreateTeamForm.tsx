import { ModalForm } from '../../ModalForm';
import { createTeamFormSchema } from './CreateTeamForm.schemas';

import { Input } from '@/components/common/Input/Input';
import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';

type CreateTeamFormProps = Readonly<{
	onSuccess: () => void;
}>;

export const CreateTeamForm = ({ onSuccess }: CreateTeamFormProps) => {
	const { createTeamMutation } = useTeams();
	const {
		handleFormSubmit,
		register,
		formState: { errors, isSubmitSuccessful },
	} = useZodForm(createTeamFormSchema, {
		onSubmit: ({ name }) => {
			createTeamMutation.mutate(
				{ name },
				{
					onSuccess: () => {
						onSuccess();
					},
				}
			);
		},
	});

	return (
		<ModalForm
			buttonText="Create a new team"
			disabled={isSubmitSuccessful}
			onSubmit={handleFormSubmit}
		>
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
