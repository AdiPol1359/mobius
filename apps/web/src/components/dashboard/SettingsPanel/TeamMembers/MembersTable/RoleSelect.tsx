import { roles, validateRole } from '@/lib/roles';

import type { ChangeEvent } from 'react';

import type { TeamRole } from '@/types';

type RoleSelectProps = Readonly<{
	value: string;
	onChange: (role: TeamRole) => void;
}>;

export const RoleSelect = ({ value, onChange }: RoleSelectProps) => {
	const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const { value } = event.target;

		if (validateRole(value)) {
			onChange(value);
		}
	};

	return (
		<select value={value} onChange={handleSelectChange}>
			{roles.map((role) => (
				<option key={role} value={role}>
					{role}
				</option>
			))}
		</select>
	);
};
