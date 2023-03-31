import { Menu } from '@headlessui/react';
import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

import { Item } from './Item';
import { Items } from './Items';

type DropdownProps = Readonly<{
	fullHeight?: boolean;
	className?: string;
	children: ReactNode;
}>;

export const Dropdown = ({
	fullHeight,
	className,
	children,
}: DropdownProps) => (
	<Menu
		as="div"
		className={twMerge(
			'relative z-50 flex w-fit items-center',
			fullHeight ? 'h-full' : 'h-fit',
			className
		)}
	>
		{children}
	</Menu>
);

Dropdown.Items = Items;
Dropdown.Item = Item;
Dropdown.Button = Menu.Button;
