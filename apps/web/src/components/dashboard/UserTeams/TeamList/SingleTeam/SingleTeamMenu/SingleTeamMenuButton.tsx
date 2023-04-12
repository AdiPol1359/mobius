import { VscEllipsis } from 'react-icons/vsc';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';

export const SingleTeamMenuButton = () => (
	<Dropdown.Button className="text-xl text-gray-500 hover:text-primary">
		<VscEllipsis />
	</Dropdown.Button>
);
