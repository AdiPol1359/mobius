import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

const styles: Record<Variant, string> = {
	default: 'text-gray-900',
	red: 'text-red-700',
};

const activeStyles: Record<Variant, string> = {
	default: 'bg-gray-100',
	red: 'bg-red-700/10',
};

type Variant = 'default' | 'red';

type ItemProps = Readonly<{
	variant?: Variant;
	onClick?: () => void;
	children: ReactNode;
}>;

export const Item = ({ variant = 'default', onClick, children }: ItemProps) => (
	<Menu.Item>
		{({ active }) => (
			<button
				className={twMerge(
					'flex w-full items-center gap-x-2 rounded-md px-3.5 py-2.5',
					active && activeStyles[variant],
					styles[variant]
				)}
				onClick={onClick}
			>
				{children}
			</button>
		)}
	</Menu.Item>
);
