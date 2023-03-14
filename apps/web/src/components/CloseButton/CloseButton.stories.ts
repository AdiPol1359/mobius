import type { Meta, StoryObj } from '@storybook/react';

import { CloseButton } from './CloseButton';

const meta = {
	title: 'CloseButton',
	component: CloseButton,
	args: {
		label: 'close button',
	},
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
