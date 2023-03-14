'use client';

import { useUser } from '@/hooks/useUser';

export const UserAvatar = () => {
	const { user } = useUser();

	return (
		<div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 font-medium text-white">
			{user?.firstName[0].toUpperCase()}
		</div>
	);
};
