import type { ReactNode } from 'react';

type FooterProps = Readonly<{
	children: ReactNode;
}>;

export const Footer = ({ children }: FooterProps) => (
	<footer className="flex justify-end gap-x-2">{children}</footer>
);
