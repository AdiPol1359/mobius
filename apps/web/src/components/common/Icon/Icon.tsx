import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
	blue: 'bg-blue-50 text-blue-600',
	green: 'bg-green-50 text-green-700',
} as const;

type IconProps = Readonly<{
	variant: keyof typeof variants;
	icon: ReactNode;
}>;

export const Icon = ({ variant, icon }: IconProps) => (
	<div
		className={twMerge(
			'flex h-9 w-9 items-center justify-center rounded-full',
			variants[variant]
		)}
	>
		{icon}
	</div>
);
