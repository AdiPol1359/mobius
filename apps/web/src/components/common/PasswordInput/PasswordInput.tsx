'use client';

import { forwardRef, useState } from 'react';

import { Input } from '../Input/Input';
import { InputIcon } from './InputIcon';

import type { ComponentProps } from 'react';

export const PasswordInput = forwardRef<
	HTMLInputElement,
	Omit<ComponentProps<typeof Input>, 'type'>
>((props, ref) => {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Input
			ref={ref}
			type={isVisible ? 'text' : 'password'}
			rightIcon={
				<InputIcon
					showPassword={isVisible}
					onClick={() => setIsVisible((prev) => !prev)}
				/>
			}
			{...props}
		/>
	);
});

PasswordInput.displayName = 'PasswordInput';
