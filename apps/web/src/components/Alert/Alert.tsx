import type { ReactNode } from 'react';
import type { IconType } from 'react-icons';
import { MdError, MdTaskAlt } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

import { CloseButton } from '../CloseButton';

const variants = {
	error: 'bg-red-50 text-red-700 [&>svg]:text-red-400',
	success: 'bg-green-50 text-green-700 [&>svg]:text-green-400',
} as const;

const variantIcons: Record<Variant, IconType> = {
	error: MdError,
	success: MdTaskAlt,
};

export type Variant = keyof typeof variants;

type AlertProps = Readonly<{
	variant: Variant;
	onClose?: () => void;
	children?: ReactNode;
}>;

export const Alert = ({ variant, onClose, children }: AlertProps) => {
	const Icon = variantIcons[variant];

	return (
		<div
			className={twMerge(
				'flex items-center gap-x-2.5 rounded-lg p-4',
				variants[variant]
			)}
			role="alert"
		>
			<Icon className="text-lg" />
			<div className="text-sm font-medium">{children}</div>
			<CloseButton
				label="Close alert"
				className="ml-auto text-base"
				onClick={onClose}
			/>
		</div>
	);
};
