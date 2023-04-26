import { ModalForm } from '../../ModalForm';
import { useCreateTeamForm } from './useCreateTeamForm';

import { Input } from '@/components/common/Input/Input';

type CreateTeamFormProps = Readonly<{
	onSuccess: () => void;
}>;

export const CreateTeamForm = ({ onSuccess }: CreateTeamFormProps) => {
	const {
		handleFormSubmit,
		register,
		formState: { errors, isSubmitSuccessful },
	} = useCreateTeamForm({ onSuccess });

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
