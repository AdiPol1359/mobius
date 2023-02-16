import type { ReactNode } from 'react';

type PageTitleProps = Readonly<{
	children: ReactNode;
}>;

export const PageTitle = ({ children }: PageTitleProps) => (
	<h2 className="text-lg font-medium">{children}</h2>
);
