'use client';

import { Transition } from '@headlessui/react';
import type { ReactNode } from 'react';
import { useCallback, useRef } from 'react';

import { useWindowEvent } from '@/hooks/useWindowEvent';
import { calculateMenuPosition } from '@/lib/menu';

import { useMenuContext } from './MenuProvider';

type DropdownProps = Readonly<{
	top?: number;
	children: ReactNode;
}>;

export const Dropdown = ({ top, children }: DropdownProps) => {
	const ref = useRef<HTMLDivElement | null>(null);
	const { isActive, buttonId, dropdownId, closeMenu } = useMenuContext();

	const setMenuPosition = useCallback(() => {
		const button = document.getElementById(buttonId);

		if (!button || !ref.current) return;

		const buttonBoundingClientRect = button.getBoundingClientRect();
		const { x, y } = calculateMenuPosition({
			screenWidth: window.innerWidth,
			menuWidth: ref.current.offsetWidth,
			buttonWidth: button.offsetWidth,
			buttonHeight: button.offsetHeight,
			buttonX: buttonBoundingClientRect.x,
			buttonY: buttonBoundingClientRect.y,
		});

		ref.current.style.left = `${x}px`;
		ref.current.style.top = `${top ?? y}px`;
	}, [buttonId, top]);

	useWindowEvent('click', (event) => {
		if (ref.current && !event.composedPath().includes(ref.current)) {
			closeMenu();
		}
	});

	useWindowEvent('resize', setMenuPosition);

	return (
		<Transition
			id={dropdownId}
			ref={ref}
			role="menu"
			aria-labelledby={buttonId}
			show={isActive}
			enter="transition duration-150"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="transition duration-150"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-90"
			beforeEnter={setMenuPosition}
			className="fixed z-50 w-fit rounded-md border bg-white p-2 text-black shadow-sm"
		>
			{children}
		</Transition>
	);
};
