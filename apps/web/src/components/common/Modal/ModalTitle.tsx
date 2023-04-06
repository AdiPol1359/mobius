import type { ReactNode } from 'react';

type ModalTitleProps = Readonly<{
	children: ReactNode;
}>;

export const ModalTitle = ({ children }: ModalTitleProps) => (
	<h2 className="mb-1.5 text-lg font-medium text-gray-900">{children}</h2>
);
