import type { ReactNode } from 'react';

type ModalFooterProps = Readonly<{
	children: ReactNode;
}>;

export const ModalFooter = ({ children }: ModalFooterProps) => (
	<footer className="flex justify-end gap-x-2">{children}</footer>
);
