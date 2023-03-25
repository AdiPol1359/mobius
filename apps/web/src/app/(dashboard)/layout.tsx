import type { ReactNode } from 'react';

import { PrivateRoute } from '@/components/common/PrivateRoute';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader/DashboardHeader';
import { DashboardNavigation } from '@/components/dashboard/DashboardNavigation';

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
				<main className="flex grow flex-col overflow-auto bg-gray-100 p-6">
					{children}
				</main>
			</div>
		</PrivateRoute>
	);
}