import { Transition } from '@headlessui/react';
import { createPortal } from 'react-dom';

import { CloseButton } from '../CloseButton/CloseButton';

import { useOnKeydown } from '@/hooks/useOnKeydown';

import type { MouseEvent, ReactNode } from 'react';

type BaseModalProps = Readonly<{
	isOpen: boolean;
	children?: ReactNode;
	onClose: () => void;
}>;

export const BaseModal = ({ isOpen, children, onClose }: BaseModalProps) => {
	const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	useOnKeydown('Escape', onClose);

	return createPortal(
		<Transition
			show={isOpen}
			enter="transition-opacity duration-200"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="transition-opacity duration-150"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
			role="dialog"
			aria-modal="true"
			onClick={onClose}
			className="fixed top-0 left-0 z-50 h-full w-full overflow-auto bg-black/40 py-2"
		>
			<div className="mx-auto flex min-h-full w-full max-w-xl items-center">
				<Transition.Child
					enter="transition-all duration-300"
					enterFrom="opacity-0 -translate-y-5"
					enterTo="opacity-100 translate-y-0"
					leave="transition-all duration-150"
					leaveFrom="translate-y-0 opacity-100"
					leaveTo="translate-y-5 opacity-0"
					className="relative w-full rounded-lg bg-white p-6 shadow-xl"
					onClick={handleModalClick}
				>
					<CloseButton
						label="Close modal"
						className="absolute right-3 top-3.5 text-lg text-gray-500 transition-colors hover:text-gray-900"
						onClick={onClose}
					/>
					{children}
				</Transition.Child>
			</div>
		</Transition>,
		document.body
	);
};
