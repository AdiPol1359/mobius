import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { ErrorMessage } from '../ErrorMessage';

type InputProps = Readonly<{
	label?: string;
	error?: string;
}> &
	JSX.IntrinsicElements['input'];

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, className, children, ...props }, ref) => {
		const id = useId();

		return (
			<div className="flex flex-col gap-y-0.5">
				{label && (
					<label
						htmlFor={id}
						className={twMerge(
							'text-sm text-gray-800',
							error && 'text-red-600'
						)}
					>
						{label}
					</label>
				)}
				<div className="relative">
					<input
						id={id}
						ref={ref}
						aria-invalid={Boolean(error)}
						className={twMerge(
							'w-full rounded-md border bg-white px-3 py-1.5 text-neutral-900 shadow-sm focus:outline-none',
							error && 'border-red-600 text-red-600',
							className
						)}
						{...props}
					/>
					{children}
				</div>
				<ErrorMessage error={error} />
			</div>
		);
	}
);

Input.displayName = 'Input';
