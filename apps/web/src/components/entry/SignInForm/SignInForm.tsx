'use client';

import { EntryForm } from '../EntryForm';
import { signInFormSchema } from './SignInForm.schemas';

import { Alert } from '@/components/common/Alert/Alert';
import { Input } from '@/components/common/Input/Input';
import { PasswordInput } from '@/components/common/PasswordInput/PasswordInput';
import { useAlert } from '@/hooks/useAlert';
import { useUser } from '@/hooks/useUser';
import { useZodForm } from '@/hooks/useZodForm';
import { createSession } from '@/services/sessions.service';

export const SignInForm = () => {
	const { alert, showAlert, hideAlert } = useAlert();
	const { loginMutation } = useUser();
	const {
		handleFormSubmit,
		register,
		formState: { errors },
	} = useZodForm(signInFormSchema, {
		onSubmit: ({ email, password }) => {
			loginMutation.mutate(
				{ email, password },
				{
					onError: (err) => {
						if (err instanceof createSession.Error) {
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
			<EntryForm
				title="Sign in"
				onSubmit={handleFormSubmit}
				isLoading={loginMutation.isLoading}
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
			</EntryForm>
		</>
	);
};
