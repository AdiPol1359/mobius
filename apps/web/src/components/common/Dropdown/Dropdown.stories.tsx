import { Dropdown } from './Dropdown';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Dropdown',
	component: Dropdown,
	args: {
		children: (
			<Dropdown>
				<Dropdown.Button>Click me!</Dropdown.Button>
				<Dropdown.Items position="center">
					<Dropdown.Item>Foo</Dropdown.Item>
					<Dropdown.Item variant="red">Bar</Dropdown.Item>
				</Dropdown.Items>
			</Dropdown>
		),
	},
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
