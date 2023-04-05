import type { Meta, StoryObj } from '@storybook/react';
import { AiOutlineBell } from 'react-icons/ai';

import { Icon } from './Icon';

const meta = {
	title: 'Icon',
	component: Icon,
	args: {
		icon: <AiOutlineBell />,
	},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Blue: Story = {
	args: {
		variant: 'blue',
	},
};

export const Green: Story = {
	args: {
		variant: 'green',
	},
};
