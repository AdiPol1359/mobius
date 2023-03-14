import type { ReactNode } from 'react';

import { Button } from './Button/Button';

type EntryFormProps = Readonly<{
	title: string;
	children: ReactNode;
	onSubmit?: () => void;
}>;

export const EntryForm = ({ title, children, onSubmit }: EntryFormProps) => (
	<>
		<h1 className="text-center text-3xl font-semibold">{title}</h1>
		<form className="mt-4 flex flex-col gap-y-3" onSubmit={onSubmit}>
			{children}
			<Button type="submit" variant="primary" className="mt-2">
				{title}
			</Button>
		</form>
	</>
);
