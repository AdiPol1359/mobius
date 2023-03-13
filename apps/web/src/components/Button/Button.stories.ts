import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
	},
};

export const Primary: Story = {
	args: {
		variant: 'primary',
	},
};
