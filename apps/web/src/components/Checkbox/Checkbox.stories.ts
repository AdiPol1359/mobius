import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta = {
	title: 'Checkbox',
	component: Checkbox,
} satisfies Meta<typeof Checkbox>;

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
