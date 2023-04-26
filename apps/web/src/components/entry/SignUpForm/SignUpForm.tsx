'use client';

import { EntryForm } from '../EntryForm';
import { useSignUpForm } from './useSignUpForm';

import { Alert } from '@/components/common/Alert/Alert';
import { Checkbox } from '@/components/common/Checkbox/Checkbox';
import { Input } from '@/components/common/Input/Input';
import { PasswordInput } from '@/components/common/PasswordInput/PasswordInput';
import { useAlert } from '@/hooks/useAlert';

export const SignUpForm = () => {
	const { alert, showAlert, hideAlert } = useAlert();
	const {
		isLoading,
		handleFormSubmit,
		register,
		formState: { errors },
	} = useSignUpForm({
		onSubmit: (err) => {
			showAlert({
				variant: err ? 'error' : 'success',
				content: err
					? err.data.message
					: 'Your account has been successfully created!',
			});
		},
	});

	return (
		<>
			{alert && (
				<Alert variant={alert.variant} onClose={hideAlert}>
					{alert.content}
				</Alert>
			)}
			<EntryForm
				title="Sign up"
				onSubmit={handleFormSubmit}
				isLoading={isLoading}
			>
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
