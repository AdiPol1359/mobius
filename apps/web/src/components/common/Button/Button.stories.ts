import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

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

export const Danger: Story = {
	args: {
		variant: 'danger',
	},
};

export const Text: Story = {
	args: {
		variant: 'text',
	},
};
