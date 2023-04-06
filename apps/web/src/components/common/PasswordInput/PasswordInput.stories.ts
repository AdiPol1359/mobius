import { PasswordInput } from './PasswordInput';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'PasswordInput',
	component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
