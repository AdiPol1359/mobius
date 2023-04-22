import { ModalForm } from '../../ModalForm';
import { joinTeamFormSchema } from './JoinTeamForm.schemas';

import { Input } from '@/components/common/Input/Input';
import { useTeams } from '@/hooks/useTeams';
import { useZodForm } from '@/hooks/useZodForm';

type JoinTeamFormProps = Readonly<{
	onSuccess: () => void;
}>;

export const JoinTeamForm = ({ onSuccess }: JoinTeamFormProps) => {
	const { joinTeamMutation } = useTeams();
	const {
		handleFormSubmit,
		register,
		formState: { errors, isSubmitSuccessful },
	} = useZodForm(joinTeamFormSchema, {
		onSubmit: ({ code }) => {
			joinTeamMutation.mutate(
				{ code },
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
			buttonText="Join the team"
			disabled={isSubmitSuccessful}
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
