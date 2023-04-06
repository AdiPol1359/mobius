import { Button } from '../common/Button/Button';

import type { ReactNode } from 'react';

type ModalFormProps = Readonly<{
	buttonText: string;
	onSubmit: () => void;
	children: ReactNode;
}>;

export const ModalForm = ({
	buttonText,
	onSubmit,
	children,
}: ModalFormProps) => (
	<form onSubmit={onSubmit}>
		<div className="mb-2.5 space-y-2">{children}</div>
		<Button type="submit" variant="primary" onSubmit={onSubmit} fullWidth>
			{buttonText}
		</Button>
	</form>
);
