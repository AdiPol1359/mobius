import type { ReactNode } from 'react';

import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader';
import { DashboardNavigation } from '@/components/DashboardNavigation';

export default function DashboardLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<>
			<DashboardHeader />
			<div className="flex grow">
				<DashboardNavigation />
				<main className="grow bg-gray-100 p-6">{children}</main>
			</div>
		</>
	);
}
