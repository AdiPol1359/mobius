import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';

const meta = {
	title: 'Menu',
	component: Menu,
	args: {
		children: (
			<>
				<Menu.Button>button</Menu.Button>
				<Menu.Dropdown>
					<Menu.Item>item 1</Menu.Item>
					<Menu.Item>item 2</Menu.Item>
					<Menu.Item>item 3</Menu.Item>
				</Menu.Dropdown>
			</>
		),
	},
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
