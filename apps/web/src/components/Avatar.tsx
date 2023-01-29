import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type AvatarProps = Readonly<{
	className?: string;
	children?: ReactNode;
}>;

export const Avatar = ({ className, children }: AvatarProps) => (
	<div
		className={twMerge(
			'flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500 font-medium text-white',
			className
		)}
	>
		{children}
	</div>
);
