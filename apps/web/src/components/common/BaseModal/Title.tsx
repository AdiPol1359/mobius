import type { ReactNode } from 'react';

type TitleProps = Readonly<{
	children: ReactNode;
}>;

export const Title = ({ children }: TitleProps) => (
	<h2 className="mb-1.5 text-lg font-medium text-gray-900">{children}</h2>
);
