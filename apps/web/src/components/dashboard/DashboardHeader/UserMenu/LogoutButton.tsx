'use client';

import { BiLogOut } from 'react-icons/bi';

import { Menu } from '@/components/common/Menu/Menu';
import { useUser } from '@/hooks/useUser';

export const LogoutButton = () => {
	const { logoutMutation } = useUser();

	return (
		<Menu.Item
			onClick={() => {
				logoutMutation.mutate({});
			}}
		>
			<BiLogOut />
			Log out
		</Menu.Item>
	);
};
