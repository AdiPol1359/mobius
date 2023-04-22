import { Tab } from '@headlessui/react';

import type { ReactNode } from 'react';

type TabsItemsProps = Readonly<{
	children: ReactNode;
}>;

export const TabsItems = ({ children }: TabsItemsProps) => (
	<Tab.List className="flex gap-x-4">{children}</Tab.List>
);
