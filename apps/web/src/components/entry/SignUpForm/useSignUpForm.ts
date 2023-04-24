import { signUpFormSchema } from './SignUpForm.schemas';

import { useUser } from '@/hooks/useUser';
import { useZodForm } from '@/hooks/useZodForm';
import { createUser } from '@/services/users.service';

interface Options {
	readonly onSuccess: () => void;
	readonly onError: (
		error: ReturnType<InstanceType<typeof createUser.Error>['getActualType']>
	) => void;
}

export const useSignUpForm = ({ onSuccess, onError }: Options) => {
	const { createUserMutation } = useUser();
	const { reset, ...rest } = useZodForm(signUpFormSchema, {
		onSubmit: ({ email, password, firstName, lastName }) => {
			createUserMutation.mutate(
				{ email, password, firstName, lastName },
				{
					onSuccess: () => {
						reset();
						onSuccess();
					},
					onError: (err) => {
						if (err instanceof createUser.Error) {
							onError(err.getActualType());
						}
					},
				}
			);
		},
	});

	return {
		isLoading: createUserMutation.isLoading,
		...rest,
	};
};
