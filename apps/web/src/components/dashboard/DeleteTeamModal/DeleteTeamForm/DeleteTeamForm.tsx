'use client';

import { ModalForm } from '../../ModalForm';
import { useDeleteTeamForm } from './useDeleteTeamForm';

import { Input } from '@/components/common/Input/Input';

type DeleteTeamFormProps = Readonly<{
	teamId: string;
}>;

export const DeleteTeamForm = ({ teamId }: DeleteTeamFormProps) => {
	const {
		handleFormSubmit,
		register,
		formState: { errors, isSubmitSuccessful },
	} = useDeleteTeamForm({ teamId });

	return (
		<ModalForm
			buttonText="Delete the team"
			disabled={isSubmitSuccessful}
			onSubmit={handleFormSubmit}
		>
			<Input
				type="text"
				placeholder="Enter team name"
				error={errors.name?.message}
				{...register('name')}
			/>
		</ModalForm>
	);
};
