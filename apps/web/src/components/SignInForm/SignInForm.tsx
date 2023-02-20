'use client';

import { useZodForm } from '@/hooks/useZodForm';

import { EntryForm } from '../EntryForm';
import { Input } from '../Input';
import { PasswordInput } from '../PasswordInput';
import { signInFormSchema } from './SignInForm.schemas';

export const SignInForm = () => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useZodForm(signInFormSchema, {
		onSubmit: (data) => {
			console.log('sign in form handler', data);
		},
	});

	return (
		<EntryForm title="Sign in" onSubmit={handleFormSubmit}>
			<Input
				type="text"
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
		</EntryForm>
	);
};
