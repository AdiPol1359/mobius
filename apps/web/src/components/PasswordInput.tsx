'use client';

import type { ComponentProps } from 'react';
import { forwardRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

import { Input } from './Input';

export const PasswordInput = forwardRef<
	HTMLInputElement,
	Omit<ComponentProps<typeof Input>, 'type'>
>(({ className, ...props }, ref) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Input
			ref={ref}
			type={isVisible ? 'text' : 'password'}
			className={twMerge('pr-8', className)}
			{...props}
		>
			<button
				type="button"
				aria-label={`${isVisible ? 'Hide' : 'Show'} password`}
				onClick={() => setIsVisible((prev) => !prev)}
				className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xl text-gray-600"
			>
				{isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
			</button>
		</Input>
	);
});

PasswordInput.displayName = 'PasswordInput';
