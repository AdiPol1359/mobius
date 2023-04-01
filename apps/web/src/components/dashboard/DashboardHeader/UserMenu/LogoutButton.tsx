'use client';

import { BiLogOut } from 'react-icons/bi';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { useUser } from '@/hooks/useUser';

export const LogoutButton = () => {
	const { logoutMutation } = useUser();

	return (
		<Dropdown.Item
			onClick={() => {
				logoutMutation.mutate({});
			}}
		>
			<BiLogOut />
			Log out
		</Dropdown.Item>
	);
};
