import { AiOutlineDelete } from 'react-icons/ai';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';

type DeleteTeamButtonProps = Readonly<{
	onClick: () => void;
}>;

export const DeleteTeamButton = ({ onClick }: DeleteTeamButtonProps) => (
	<Dropdown.Item variant="red" onClick={onClick}>
		<AiOutlineDelete />
		Delete the team
	</Dropdown.Item>
);
