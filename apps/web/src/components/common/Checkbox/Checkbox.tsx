import { forwardRef } from 'react';
import { FaCheck } from 'react-icons/fa';

import { ErrorMessage } from '../ErrorMessage';

type CheckboxProps = Readonly<{
	label?: string;
	error?: string;
}> &
	JSX.IntrinsicElements['input'];

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, error, ...props }, ref) => (
		<div className="space-y-0.5">
			<label className="flex cursor-pointer items-center gap-x-2 text-sm">
				<input
					ref={ref}
					data-invalid={Boolean(error)}
					type="checkbox"
					className="peer hidden"
					{...props}
				/>
				<div className="flex h-6 w-6 items-center justify-center rounded-md border bg-white text-white shadow-sm transition-colors duration-100 peer-checked:border-primary-500 peer-checked:bg-primary">
					<FaCheck />
				</div>
				{label}
			</label>
			<ErrorMessage error={error} />
		</div>
	)
);

Checkbox.displayName = 'Checkbox';
