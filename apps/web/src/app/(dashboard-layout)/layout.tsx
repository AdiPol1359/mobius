import type { ReactNode } from 'react';

import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader';
import { DashboardNavigation } from '@/components/DashboardNavigation';
import { PrivateRoute } from '@/components/PrivateRoute';

export default function DashboardLayout({
	children,
}: {
	readonly children: ReactNode;
}) {
	return (
		<PrivateRoute>
			<DashboardHeader />
			<div className="flex grow overflow-auto">
				<DashboardNavigation />
				<main className="grow overflow-auto bg-gray-100 p-6">{children}</main>
			</div>
		</PrivateRoute>
	);
}
