'use client';

import { VscEllipsis } from 'react-icons/vsc';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import type { Team } from '@/types';

import { DeleteTeamButton } from './DeleteTeamButton';
import { LeaveTeamButton } from './LeaveTeamButton';

type SingleTeamMenuProps = Readonly<{
	team: Team;
}>;

export const SingleTeamMenu = ({
	team: { id, roles },
}: SingleTeamMenuProps) => (
	<Dropdown className="absolute right-3.5 top-3">
		<Dropdown.Button className="text-xl text-gray-500 hover:text-indigo-600">
			<VscEllipsis />
		</Dropdown.Button>
		<Dropdown.Items position="center">
			{roles?.includes('OWNER') && <DeleteTeamButton teamId={id} />}
			{roles?.includes('MEMBER') && <LeaveTeamButton teamId={id} />}
		</Dropdown.Items>
	</Dropdown>
);
