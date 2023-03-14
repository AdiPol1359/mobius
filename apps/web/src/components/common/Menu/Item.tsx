import type { ReactNode } from 'react';

type ItemProps = Readonly<{
	children: ReactNode;
	onClick?: () => void;
}>;

export const Item = ({ children, onClick }: ItemProps) => (
	<button
		type="button"
		role="menuitem"
		className="flex w-full items-center gap-x-2 rounded-md px-3.5 py-2.5 hover:bg-gray-100"
		onClick={onClick}
	>
		{children}
	</button>
);
