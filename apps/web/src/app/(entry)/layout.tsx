import type { ReactNode } from 'react';

export default function EntryLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<main className="my-auto p-3">
			<div className="mx-auto w-full max-w-xl space-y-6">{children}</div>
		</main>
	);
}
