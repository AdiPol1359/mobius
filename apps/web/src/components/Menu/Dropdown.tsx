'use client';

import { Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import { useRef } from 'react';

import { useDocumentEvent } from '@/hooks/useDocumentEvent';

import { useMenuContext } from './MenuProvider';

type DropdownProps = Readonly<{
	children: ReactNode;
}>;

export const Dropdown = ({ children }: DropdownProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const { isActive, buttonId, dropdownId, closeMenu } = useMenuContext();

	useDocumentEvent('click', (event) => {
		if (ref.current && !event.composedPath().includes(ref.current)) {
			closeMenu();
		}
	});

	return (
		<Transition
			show={isActive}
			enter="transition duration-150"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="transition duration-150"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-90"
			id={dropdownId}
			ref={ref}
			aria-labelledby={buttonId}
			role="menu"
			className="absolute -right-4 top-full w-44 rounded-md border bg-white p-2 text-black shadow-sm"
		>
			{children}
		</Transition>
	);
};
