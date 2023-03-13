import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta = {
	title: 'Input',
	component: Input,
	args: {
		value: 'input',
	},
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Label: Story = {
	args: {
		label: 'Label',
	},
};

export const Error: Story = {
	args: {
		error: 'Error',
	},
};
