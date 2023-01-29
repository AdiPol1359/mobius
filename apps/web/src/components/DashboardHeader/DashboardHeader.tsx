import { NotificationsMenu } from './NotificationsMenu';
import { UserMenu } from './UserMenu';

export const DashboardHeader = () => (
	<header className="flex h-14 items-center justify-between border-b bg-white px-4">
		<h1 className="font-semibold">Mobius</h1>
		<div className="flex h-full items-center gap-x-2.5 text-gray-700">
			<UserMenu />
			<NotificationsMenu />
		</div>
	</header>
);
