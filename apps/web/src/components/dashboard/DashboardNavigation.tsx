import {
	AiOutlineBook,
	AiOutlineCalendar,
	AiOutlineComment,
	AiOutlineSetting,
	AiOutlineTeam,
} from 'react-icons/ai';

import { ActiveLink } from '@/components/common/ActiveLink';

const items = [
	{
		href: '/dashboard/conversations',
		label: 'Conversations',
		icon: <AiOutlineComment />,
	},
	{
		href: '/dashboard/notes',
		label: 'Notes',
		icon: <AiOutlineBook />,
	},
	{
		href: '/dashboard/teams',
		label: 'Teams',
		icon: <AiOutlineTeam />,
	},
	{
		href: '/dashboard/calendar',
		label: 'Calendar',
		icon: <AiOutlineCalendar />,
	},
	{
		href: '/dashboard/settings',
		label: 'Settings',
		icon: <AiOutlineSetting />,
	},
] as const;

export const DashboardNavigation = () => (
	<nav className="w-14 border-r bg-white">
		<ul className="space-y-1">
			{items.map(({ href, label, icon }) => (
				<li key={href}>
					<ActiveLink
						href={href}
						aria-label={label}
						className="flex aspect-square items-center justify-center border-l-2 border-transparent text-2xl text-gray-600 hover:text-primary"
						activeClassName="border-primary text-primary"
					>
						{icon}
					</ActiveLink>
				</li>
			))}
		</ul>
	</nav>
);
