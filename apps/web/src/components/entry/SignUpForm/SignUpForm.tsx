'use client';

import { Alert } from '@/components/common/Alert/Alert';
import { Checkbox } from '@/components/common/Checkbox/Checkbox';
import { Input } from '@/components/common/Input/Input';
import { PasswordInput } from '@/components/common/PasswordInput';
import { useAlert } from '@/hooks/useAlert';
import { useUser } from '@/hooks/useUser';
import { useZodForm } from '@/hooks/useZodForm';
import { createUser } from '@/services/users.service';

import { EntryForm } from '../EntryForm';
import { signUpFormSchema } from './SignUpForm.schemas';

export const SignUpForm = () => {
	const { alert, showAlert, hideAlert } = useAlert();
	const { registerMutation } = useUser();
	const {
		handleFormSubmit,
		register,
		reset,
		formState: { errors },
	} = useZodForm(signUpFormSchema, {
		onSubmit: ({ email, password, firstName, lastName }) => {
			registerMutation.mutate(
				{ email, password, firstName, lastName },
				{
					onSuccess: () => {
						reset();
						showAlert({
							variant: 'success',
							content: 'Your account has been successfully created!',
						});
					},
					onError: (err) => {
						if (err instanceof createUser.Error) {
							showAlert({
								variant: 'error',
								content: err.getActualType().data.message,
							});
						}
					},
				}
			);
		},
	});

	return (
		<>
			{alert && (
				<Alert variant={alert.variant} onClose={hideAlert}>
					{alert.content}
				</Alert>
			)}
			<EntryForm title="Sign up" onSubmit={handleFormSubmit}>
				<Input
					type="text"
					label="First name"
					placeholder="Your first name"
					error={errors.firstName?.message}
					{...register('firstName')}
				/>
				<Input
					type="text"
					label="Last name"
					placeholder="Your last name"
					error={errors.lastName?.message}
					{...register('lastName')}
				/>
				<Input
					type="email"
					label="Email address"
					placeholder="Your email"
					error={errors.email?.message}
					{...register('email')}
				/>
				<PasswordInput
					label="Password"
					placeholder="Your password"
					error={errors.password?.message}
					{...register('password')}
				/>
				<PasswordInput
					label="Confirm password"
					placeholder="Confirm your password"
					error={errors.confirmPassword?.message}
					{...register('confirmPassword')}
				/>
				<Checkbox
					label="I accept the Terms and Conditions"
					error={errors?.acceptRules?.message}
					{...register('acceptRules')}
				/>
			</EntryForm>
		</>
	);
};
