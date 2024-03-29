'use client';

import { DeleteTeamButton } from './DeleteTeamButton';
import { LeaveTeamButton } from './LeaveTeamButton';
import { SingleTeamMenuButton } from './SingleTeamMenuButton';

import { Dropdown } from '@/components/common/Dropdown/Dropdown';
import { DeleteTeamModal } from '@/components/dashboard/DeleteTeamModal/DeleteTeamModal';
import { LeaveTeamModal } from '@/components/dashboard/LeaveTeamModal';
import { useModal } from '@/hooks/useModal';
import { hasRole } from '@/utils/teams';

import type { Team } from '@/types';

type SingleTeamMenuProps = Readonly<{
	team: Team;
}>;

export const SingleTeamMenu = ({ team }: SingleTeamMenuProps) => {
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
					{hasRole(team, 'OWNER') && (
						<DeleteTeamButton onClick={openDeleteTeamModal} />
					)}
					{hasRole(team, 'MEMBER') && (
						<LeaveTeamButton onClick={openLeaveTeamModal} />
					)}
				</Dropdown.Items>
			</Dropdown>
			<DeleteTeamModal
				teamId={team.id}
				isOpen={isDeleteTeamOpen}
				onClose={closeDeleteTeamModal}
			/>
			<LeaveTeamModal
				teamId={team.id}
				isOpen={isLeaveTeamOpen}
				onClose={closeLeaveTeamModal}
			/>
		</>
	);
};
