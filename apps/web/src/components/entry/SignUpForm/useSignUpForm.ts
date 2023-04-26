import { signUpFormSchema } from './SignUpForm.schemas';

import { useUser } from '@/hooks/useUser';
import { useZodForm } from '@/hooks/useZodForm';
import { createUser } from '@/services/users.service';

interface Options {
	readonly onSubmit: (
		error?: ReturnType<InstanceType<typeof createUser.Error>['getActualType']>
	) => void;
}

export const useSignUpForm = ({ onSubmit }: Options) => {
	const { createUserMutation } = useUser();
	const { reset, ...rest } = useZodForm(signUpFormSchema, {
		onSubmit: ({ email, password, firstName, lastName }) => {
			createUserMutation.mutate(
				{ email, password, firstName, lastName },
				{
					onSuccess: () => {
						reset();
						onSubmit();
					},
					onError: (err) => {
						if (err instanceof createUser.Error) {
							onSubmit(err.getActualType());
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
