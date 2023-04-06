'use client';

import { Avatar } from '@/components/common/Avatar/Avatar';
import { useUser } from '@/hooks/useUser';

export const UserAvatar = () => {
	const { user } = useUser();

	if (!user) return null;

	return <Avatar name={user.firstName} />;
};
