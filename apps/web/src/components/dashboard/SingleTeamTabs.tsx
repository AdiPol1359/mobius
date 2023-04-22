'use client';

import { Tabs } from '@/components/common/Tabs/Tabs';

import type { ReactNode } from 'react';

type SingleTeamTabsProps = Readonly<{
	children: ReactNode;
}>;

export const SingleTeamTabs = ({ children }: SingleTeamTabsProps) => (
	<Tabs>
		<Tabs.Items>
			<Tabs.Item>Conversation</Tabs.Item>
			<Tabs.Item>Settings</Tabs.Item>
		</Tabs.Items>
		<Tabs.Panels className="flex flex-1 flex-col overflow-auto">
			{children}
		</Tabs.Panels>
	</Tabs>
);
