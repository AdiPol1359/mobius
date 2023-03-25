'use client';

import { useUser } from '@/hooks/useUser';
import { getFirstLetter } from '@/utils/string';

export const UserAvatar = () => {
	const { user } = useUser();

	return (
		<div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 font-medium text-white">
			{user && getFirstLetter(user.firstName)}
		</div>
	);
};
