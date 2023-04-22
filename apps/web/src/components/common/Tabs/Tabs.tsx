import { Tab } from '@headlessui/react';

import { TabsItem } from './TabsItem';
import { TabsItems } from './TabsItems';

import type { ReactNode } from 'react';

type TabsProps = Readonly<{
	children: ReactNode;
}>;

export const Tabs = ({ children }: TabsProps) => (
	<Tab.Group>{children}</Tab.Group>
);

Tabs.Item = TabsItem;
Tabs.Items = TabsItems;
Tabs.Panels = Tab.Panels;
Tabs.Panel = Tab.Panel;
