import type { ReactNode } from 'react';

import { Button } from './Button';
import { Dropdown } from './Dropdown';
import { MenuProvider } from './MenuProvider';

type MenuProps = Readonly<{
	children: ReactNode;
}>;

export const Menu = ({ children }: MenuProps) => (
	<MenuProvider>
		<div className="relative flex h-full items-center">{children}</div>
	</MenuProvider>
);

Menu.Button = Button;
Menu.Dropdown = Dropdown;
