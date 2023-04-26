'use client';

import { BiLogOut } from 'react-icons/bi';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { useSession } from '@/hooks/useSession';

export const LogoutButton = () => {
	const { deleteSessionMutation } = useSession();

	return (
		<Dropdown.Item
			onClick={() => {
				deleteSessionMutation.mutate({});
			}}
		>
			<BiLogOut />
			Log out
		</Dropdown.Item>
	);
};
