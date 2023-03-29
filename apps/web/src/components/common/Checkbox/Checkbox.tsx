import { FaCheck } from 'react-icons/fa';

import { ErrorMessage } from '../ErrorMessage';

type CheckboxProps = Readonly<{
	label?: string;
	error?: string;
}>;

export const Checkbox = ({ label, error }: CheckboxProps) => (
	<div className="space-y-0.5">
		<label className="flex cursor-pointer items-center gap-x-2 text-sm">
			<input type="checkbox" className="peer hidden" />
			<div className="flex h-6 w-6 items-center justify-center rounded-md border bg-white text-white shadow-sm transition-colors duration-100 peer-checked:border-indigo-500 peer-checked:bg-indigo-600">
				<FaCheck />
			</div>
			{label}
		</label>
		<ErrorMessage error={error} />
	</div>
);
