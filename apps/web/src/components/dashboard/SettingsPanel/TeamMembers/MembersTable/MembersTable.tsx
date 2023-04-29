import { MembersTableRow } from './MembersTableRow';

import type { ReactNode } from 'react';

type MembersTableProps = Readonly<{
	children: ReactNode;
}>;

export const MembersTable = ({ children }: MembersTableProps) => (
	<table className="divie-gray-400 min-w-full divide-y">
		<thead>
			<tr>
				<th className="py-4 text-left font-medium">Name</th>
				<th className="py-4 text-left font-medium">Role</th>
			</tr>
		</thead>
		<tbody className="divide-y">{children}</tbody>
	</table>
);

MembersTable.Row = MembersTableRow;
