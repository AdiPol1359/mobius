import type { ReactNode } from 'react';

import { Button } from './Button';
import { Dropdown } from './Dropdown';
import { Item } from './Item';
import { MenuProvider } from './MenuProvider';

type MenuProps = Readonly<{
	children: ReactNode;
}>;

export const Menu = ({ children }: MenuProps) => (
	<MenuProvider>{children}</MenuProvider>
);

Menu.Button = Button;
Menu.Dropdown = Dropdown;
Menu.Item = Item;
