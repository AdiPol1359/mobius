import { Menu } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

import { DropdownItem } from './DropdownItem';
import { DropdownItems } from './DropdownItems';

import type { ReactNode } from 'react';

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
			'relative flex w-fit items-center',
			fullHeight ? 'h-full' : 'h-fit',
			className
		)}
	>
		{children}
	</Menu>
);

Dropdown.Item = DropdownItem;
Dropdown.Items = DropdownItems;
Dropdown.Button = Menu.Button;
