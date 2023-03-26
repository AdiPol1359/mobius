import { forwardRef, useId } from 'react';
import { FaCheck } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

import { ErrorMessage } from '../ErrorMessage';

type CheckboxProps = Readonly<{
	label?: string;
	error?: string;
}> &
	JSX.IntrinsicElements['input'];

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ label, error, className, ...props }, ref) => {
		const id = useId();

		return (
			<div className="space-y-0.5">
				<div className="flex items-center gap-x-2">
					<label className="h-6 w-6 cursor-pointer">
						<input
							id={id}
							ref={ref}
							aria-invalid={Boolean(error)}
							type="checkbox"
							className="hidden [&+div>svg]:checked:opacity-100 [&+div]:checked:border-indigo-500 [&+div]:checked:bg-indigo-600"
							{...props}
						/>
						<div
							className={twMerge(
								'flex h-full w-full items-center justify-center rounded-md border bg-white shadow-sm transition-colors duration-100',
								className
							)}
						>
							<FaCheck className="text-sm text-white opacity-0 transition-opacity duration-100" />
						</div>
					</label>
					{label && (
						<label
							htmlFor={id}
							className="cursor-pointer text-sm text-neutral-900"
						>
							{label}
						</label>
					)}
				</div>
				<ErrorMessage error={error} />
			</div>
		);
	}
);

Checkbox.displayName = 'Checkbox';
