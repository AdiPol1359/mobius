import { Tabs } from './Tabs';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Tabs',
	component: Tabs,
	args: {
		children: (
			<Tabs>
				<Tabs.Items>
					<Tabs.Item>foo</Tabs.Item>
					<Tabs.Item>bar</Tabs.Item>
					<Tabs.Item>baz</Tabs.Item>
				</Tabs.Items>
				<Tabs.Panels>
					<Tabs.Panel>foo content</Tabs.Panel>
					<Tabs.Panel>bar content</Tabs.Panel>
					<Tabs.Panel>baz content</Tabs.Panel>
				</Tabs.Panels>
			</Tabs>
		),
	},
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
