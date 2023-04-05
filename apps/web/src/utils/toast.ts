import type { components } from 'openapi-types';
import type { TypedFetch } from 'openapi-typescript-fetch';
import { toast } from 'react-hot-toast';

interface OP {
	readonly responses: Record<
		number,
		{
			content: {
				'application/json': components['schemas']['OpenAPIHttpException'];
			};
		}
	>;
}

export const showAPIErrorToast = <T extends TypedFetch<OP>['Error']>(
	err: unknown,
	error: T
) => {
	if (err instanceof error) {
		toast.error(err.getActualType().data.message);
	}
};
