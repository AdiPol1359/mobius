import { Transition } from '@headlessui/react';
import type { MouseEvent, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';

import { useOnKeydown } from '@/hooks/useOnKeydown';

type ModalProps = Readonly<{
	isOpen: boolean;
	children?: ReactNode;
	onClose: () => void;
}>;

export const Modal = ({ isOpen, children, onClose }: ModalProps) => {
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
					enter="transition-all duration-200"
					enterFrom="scale-95 opacity-0"
					enterTo="scale-100 opacity-100"
					leave="transition-all duration-150"
					leaveFrom="scale-100 opacity-100"
					leaveTo="scale-95 opacity-0"
					className="relative w-full rounded-lg bg-white p-6 shadow-xl"
					onClick={handleModalClick}
				>
					<button
						type="button"
						aria-label="Close modal"
						onClick={onClose}
						className="absolute right-3 top-3.5 text-lg text-gray-900 hover:text-gray-800"
					>
						<MdClose />
					</button>
					{children}
				</Transition.Child>
			</div>
		</Transition>,
		document.body
	);
};
