import type { ReactNode } from 'react';

import { Button } from '../common/Button/Button';

type TeamModalFormProps = Readonly<{
	buttonText: string;
	onSubmit: () => void;
	children: ReactNode;
}>;

export const TeamModalForm = ({
	buttonText,
	onSubmit,
	children,
}: TeamModalFormProps) => (
	<form onSubmit={onSubmit}>
		<div className="mb-2.5 space-y-2">{children}</div>
		<Button type="submit" variant="primary" onSubmit={onSubmit} fullWidth>
			{buttonText}
		</Button>
	</form>
);
