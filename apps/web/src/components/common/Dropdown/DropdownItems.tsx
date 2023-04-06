import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type DropdownItemsProps = Readonly<{
	position: 'left' | 'right' | 'center';
	children: ReactNode;
}>;

export const DropdownItems = ({ position, children }: DropdownItemsProps) => (
	<Transition
		as={Fragment}
		enter="transition duration-150"
		enterFrom="opacity-0 scale-95"
		enterTo="opacity-100 scale-100"
		leave="transition duration-150"
		leaveFrom="opacity-100 scale-100"
		leaveTo="opacity-0 scale-90"
	>
		<Menu.Items
			className={twMerge(
				'absolute top-full z-50 whitespace-nowrap rounded-md border bg-white p-1 text-sm',
				position === 'left' && 'left-0',
				position === 'right' && 'right-0',
				position === 'center' && 'left-1/2 -translate-x-1/2'
			)}
		>
			{children}
		</Menu.Items>
	</Transition>
);
