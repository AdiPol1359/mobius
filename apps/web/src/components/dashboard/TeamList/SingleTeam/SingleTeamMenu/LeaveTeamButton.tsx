import { AiOutlineExport } from 'react-icons/ai';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';

type LeaveTeamButtonProps = Readonly<{
	onClick: () => void;
}>;

export const LeaveTeamButton = ({ onClick }: LeaveTeamButtonProps) => (
	<Dropdown.Item onClick={onClick}>
		<AiOutlineExport /> Leave the team
	</Dropdown.Item>
);
