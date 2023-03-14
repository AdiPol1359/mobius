import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

const meta = {
	title: 'Alert',
	component: Alert,
	args: {
		children: 'Alert',
	},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
	args: {
		variant: 'success',
	},
};

export const Error: Story = {
	args: {
		variant: 'error',
	},
};