import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type {
	SubmitErrorHandler,
	SubmitHandler,
	UseFormProps,
} from 'react-hook-form';
import type { Schema, TypeOf } from 'zod';

interface Options<T extends Schema> {
	readonly onSubmit: SubmitHandler<TypeOf<T>>;
	readonly onError?: SubmitErrorHandler<TypeOf<T>>;
}

export const useZodForm = <T extends Schema>(
	schema: T,
	{ onSubmit, onError }: Options<T>,
	props?: Omit<UseFormProps<TypeOf<T>>, 'resolver'>
) => {
	const { handleSubmit, ...rest } = useForm<TypeOf<T>>({
		resolver: zodResolver(schema),
		...props,
	});
	const handleFormSubmit = handleSubmit(onSubmit, onError);

	return { handleFormSubmit, ...rest };
};
