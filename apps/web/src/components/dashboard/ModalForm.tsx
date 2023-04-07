import { Button } from '../common/Button/Button';

import type { ReactNode } from 'react';

type ModalFormProps = Readonly<{
	buttonText: string;
	onSubmit: () => void;
	children: ReactNode;
	disabled?: boolean;
}>;

export const ModalForm = ({
	buttonText,
	onSubmit,
	children,
	disabled,
}: ModalFormProps) => (
	<form onSubmit={onSubmit}>
		<div className="mb-2.5 space-y-2">{children}</div>
		<Button
			type="submit"
			variant="primary"
			onSubmit={onSubmit}
			disabled={disabled}
			fullWidth
		>
			{buttonText}
		</Button>
	</form>
);
