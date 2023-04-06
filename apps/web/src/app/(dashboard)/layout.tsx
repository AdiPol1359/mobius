import { PrivateRoute } from '@/components/common/PrivateRoute';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader/DashboardHeader';
import { DashboardNavigation } from '@/components/dashboard/DashboardNavigation';
import { DashboardNotifications } from '@/components/dashboard/DashboardNotifications/DashboardNotifications';

import type { ReactNode } from 'react';

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
				<main className="custom-scrollbar flex grow flex-col overflow-auto bg-gray-100 px-6 pt-6">
					{children}
				</main>
			</div>
			<DashboardNotifications />
		</PrivateRoute>
	);
}
