import { CopyButton } from './CopyButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'CopyButton',
	component: CopyButton,
	args: {
		value: 'https://github.com/AdiPol1359/mobius',
		text: 'Copy url',
		copiedText: 'Copied',
	},
} satisfies Meta<typeof CopyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
