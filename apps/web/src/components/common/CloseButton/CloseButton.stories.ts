import { CloseButton } from './CloseButton';

import type { Meta, StoryObj } from '@storybook/react';

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
