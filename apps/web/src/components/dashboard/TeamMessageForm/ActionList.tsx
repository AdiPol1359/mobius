import type { ReactNode } from 'react';

type ItemProps = Readonly<{
	type?: 'button' | 'submit';
	label: string;
	icon: ReactNode;
}>;

const Item = ({ type = 'button', label, icon }: ItemProps) => (
	<li>
		<button
			type={type}
			aria-label={label}
			className="text-xl text-gray-500 hover:text-primary"
		>
			{icon}
		</button>
	</li>
);

type ActionListProps = Readonly<{
	children: ReactNode;
}>;

export const ActionList = ({ children }: ActionListProps) => (
	<ul className="flex gap-x-1.5">{children}</ul>
);

ActionList.Item = Item;
