import { AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';

import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'Input',
	component: Input,
	args: {
		type: 'text',
		defaultValue: 'input',
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

export const Icons: Story = {
	args: {
		leftIcon: <AiOutlineTwitter />,
		rightIcon: <AiOutlineFacebook />,
	},
};
