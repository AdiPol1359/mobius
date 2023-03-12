'use client';

import { VscEllipsis } from 'react-icons/vsc';

import { Menu } from '@/components/Menu/Menu';

export const SingleTeamMenu = () => (
	<Menu>
		<Menu.Button className="absolute right-3.5 top-3 text-xl text-gray-500 hover:text-indigo-600">
			<VscEllipsis />
		</Menu.Button>
		<Menu.Dropdown>team menu</Menu.Dropdown>
	</Menu>
);
