'use client';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { DeleteTeamModal } from '@/components/dashboard/DeleteTeamModal/DeleteTeamModal';
import { LeaveTeamModal } from '@/components/dashboard/LeaveTeamModal';
import { useModal } from '@/hooks/useModal';
import type { Team } from '@/types';

import { DeleteTeamButton } from './DeleteTeamButton';
import { LeaveTeamButton } from './LeaveTeamButton';
import { SingleTeamMenuButton } from './SingleTeamMenuButton';

type SingleTeamMenuProps = Readonly<{
	team: Team;
}>;

export const SingleTeamMenu = ({
	team: { id, roles },
}: SingleTeamMenuProps) => {
	const {
		isOpen: isDeleteTeamOpen,
		openModal: openDeleteTeamModal,
		closeModal: closeDeleteTeamModal,
	} = useModal();

	const {
		isOpen: isLeaveTeamOpen,
		openModal: openLeaveTeamModal,
		closeModal: closeLeaveTeamModal,
	} = useModal();

	return (
		<>
			<Dropdown className="absolute right-3.5 top-3">
				<SingleTeamMenuButton />
				<Dropdown.Items position="center">
					{roles?.includes('OWNER') && (
						<DeleteTeamButton onClick={openDeleteTeamModal} />
					)}
					{roles?.includes('MEMBER') && (
						<LeaveTeamButton onClick={openLeaveTeamModal} />
					)}
				</Dropdown.Items>
			</Dropdown>
			<DeleteTeamModal
				teamId={id}
				isOpen={isDeleteTeamOpen}
				onClose={closeDeleteTeamModal}
			/>
			<LeaveTeamModal
				teamId={id}
				isOpen={isLeaveTeamOpen}
				onClose={closeLeaveTeamModal}
			/>
		</>
	);
};
