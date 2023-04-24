import { signInFormSchema } from './SignInForm.schemas';

import { useUser } from '@/hooks/useUser';
import { useZodForm } from '@/hooks/useZodForm';
import { createSession } from '@/services/sessions.service';

interface Options {
	readonly onError: (
		error: ReturnType<InstanceType<typeof createSession.Error>['getActualType']>
	) => void;
}

export const useSignInForm = ({ onError }: Options) => {
	const { createSessionMutation } = useUser();
	const result = useZodForm(signInFormSchema, {
		onSubmit: ({ email, password }) => {
			createSessionMutation.mutate(
				{ email, password },
				{
					onError: (err) => {
						if (err instanceof createSession.Error) {
							onError(err.getActualType());
						}
					},
				}
			);
		},
	});

	return {
		isLoading: createSessionMutation.isLoading,
		...result,
	};
};
