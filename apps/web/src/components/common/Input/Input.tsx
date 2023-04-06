import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { ErrorMessage } from '../ErrorMessage';
import { IconWrapper } from './IconWrapper';

import type { ReactNode } from 'react';

type InputProps = Readonly<{
	label?: string;
	error?: string;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}> &
	JSX.IntrinsicElements['input'];

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, leftIcon, rightIcon, className, ...props }, ref) => {
		const id = useId();

		return (
			<div className="space-y-0.5">
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
					{leftIcon && <IconWrapper position="left" icon={leftIcon} />}
					<input
						id={id}
						ref={ref}
						aria-invalid={Boolean(error)}
						className={twMerge(
							'w-full rounded-md border bg-white py-1.5 text-neutral-900 shadow-sm focus:outline-none',
							error && 'border-red-600 text-red-600',
							leftIcon ? 'pl-8' : 'pl-3',
							rightIcon ? 'pr-8' : 'pr-3',
							className
						)}
						{...props}
					/>
					{rightIcon && <IconWrapper position="right" icon={rightIcon} />}
				</div>
				<ErrorMessage error={error} />
			</div>
		);
	}
);

Input.displayName = 'Input';
