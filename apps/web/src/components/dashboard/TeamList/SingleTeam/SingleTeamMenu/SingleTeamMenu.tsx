'use client';

import { VscEllipsis } from 'react-icons/vsc';

import { Menu } from '@/components/common/Menu/Menu';
import type { Team } from '@/types';

import { DeleteTeamButton } from './DeleteTeamButton';

type SingleTeamMenuProps = Readonly<{
	team: Team;
}>;

export const SingleTeamMenu = ({
	team: { id, roles },
}: SingleTeamMenuProps) => (
	<Menu>
		<Menu.Button className="absolute right-3.5 top-3 text-xl text-gray-500 hover:text-indigo-600">
			<VscEllipsis />
		</Menu.Button>
		<Menu.Dropdown>
			{roles?.includes('OWNER') && <DeleteTeamButton teamId={id} />}
		</Menu.Dropdown>
	</Menu>
);
