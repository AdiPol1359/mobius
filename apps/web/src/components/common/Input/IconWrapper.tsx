import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type IconWrapperProps = Readonly<{
	position: 'left' | 'right';
	icon: ReactNode;
}>;

export const IconWrapper = ({ position, icon }: IconWrapperProps) => (
	<div
		className={twMerge(
			'absolute top-0 flex aspect-square h-full items-center justify-center',
			position === 'left' && 'left-0',
			position === 'right' && 'right-0'
		)}
	>
		{icon}
	</div>
);
