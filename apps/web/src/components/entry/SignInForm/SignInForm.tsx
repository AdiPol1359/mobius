'use client';

import Link from 'next/link';

import { EntryForm } from '../EntryForm';
import { useSignInForm } from './useSignInForm';

import { Alert } from '@/components/common/Alert/Alert';
import { Input } from '@/components/common/Input/Input';
import { PasswordInput } from '@/components/common/PasswordInput/PasswordInput';
import { useAlert } from '@/hooks/useAlert';

export const SignInForm = () => {
	const { alert, showAlert, hideAlert } = useAlert();
	const {
		isLoading,
		handleFormSubmit,
		register,
		formState: { errors },
	} = useSignInForm({
		onError: ({ data: { message } }) => {
			showAlert({
				variant: 'error',
				content: message,
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
				title="Sign in"
				onSubmit={handleFormSubmit}
				isLoading={isLoading}
			>
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
				<Link
					href="/sign-up"
					className="block text-sm text-primary hover:underline"
				>
					You don&apos;t have an account yet?
				</Link>
			</EntryForm>
		</>
	);
};
