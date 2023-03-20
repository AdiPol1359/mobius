import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

const variants = {
	default: 'hover:bg-gray-100',
	red: 'text-red-700 hover:bg-red-700/10',
} as const;

type ItemProps = Readonly<{
	children: ReactNode;
	variant?: keyof typeof variants;
	onClick?: () => void;
}>;

export const Item = ({ children, onClick, variant = 'default' }: ItemProps) => (
	<button
		type="button"
		role="menuitem"
		className={twMerge(
			'flex w-full items-center gap-x-2 rounded-md px-3.5 py-2.5',
			variants[variant]
		)}
		onClick={onClick}
	>
		{children}
	</button>
);
