import { ModalForm } from '../../ModalForm';
import { useJoinTeamForm } from './useJoinTeamForm';

import { Input } from '@/components/common/Input/Input';

type JoinTeamFormProps = Readonly<{
	onSuccess: () => void;
}>;

export const JoinTeamForm = ({ onSuccess }: JoinTeamFormProps) => {
	const {
		handleFormSubmit,
		register,
		formState: { errors, isSubmitSuccessful },
	} = useJoinTeamForm({ onSuccess });

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
