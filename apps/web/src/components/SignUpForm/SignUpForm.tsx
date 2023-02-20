'use client';

import { useZodForm } from '@/hooks/useZodForm';

import { Checkbox } from '../Checkbox';
import { EntryForm } from '../EntryForm';
import { Input } from '../Input';
import { PasswordInput } from '../PasswordInput';
import { signUpFormSchema } from './SignUpForm.schemas';

export const SignUpForm = () => {
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useZodForm(signUpFormSchema, {
		onSubmit: (data) => {
			console.log('sign up form handler', data);
		},
	});

	return (
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
	);
};
