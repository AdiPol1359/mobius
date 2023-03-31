import { NotificationsMenu } from './NotificationsMenu';
import { UserMenu } from './UserMenu/UserMenu';

export const HEADER_MENU_TOP = 55;

export const DashboardHeader = () => (
	<header className="flex h-full max-h-14 items-center justify-between border-b bg-white px-4">
		<h1 className="font-semibold">Mobius</h1>
		<div className="flex h-full gap-x-2.5">
			<UserMenu />
			<NotificationsMenu />
		</div>
	</header>
);
