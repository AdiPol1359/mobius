import type { ReactNode } from 'react';

import { Button } from '../common/Button/Button';

type EntryFormProps = Readonly<{
	title: string;
	children: ReactNode;
	onSubmit?: () => void;
}>;

export const EntryForm = ({ title, children, onSubmit }: EntryFormProps) => (
	<>
		<h1 className="text-center text-3xl font-semibold">{title}</h1>
		<form className="mt-4" onSubmit={onSubmit}>
			<div className="mb-5 space-y-3">{children}</div>
			<Button type="submit" variant="primary" fullWidth>
				{title}
			</Button>
		</form>
	</>
);
