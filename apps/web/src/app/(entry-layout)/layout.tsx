import type { ReactNode } from 'react';

export default function EntryLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<main className="my-auto p-1.5">
			<div className="mx-auto w-full max-w-xl">{children}</div>
		</main>
	);
}
