import {
	AiOutlineBook,
	AiOutlineCalendar,
	AiOutlineComment,
	AiOutlineSetting,
	AiOutlineTeam,
} from 'react-icons/ai';

import { ActiveLink } from '@/components/ActiveLink';

const items = [
	{
		href: '/dashboard/conversations',
		icon: <AiOutlineComment />,
	},
	{
		href: '/dashboard/notes',
		icon: <AiOutlineBook />,
	},
	{
		href: '/dashboard/teams',
		icon: <AiOutlineTeam />,
	},
	{
		href: '/dashboard/calendar',
		icon: <AiOutlineCalendar />,
	},
	{
		href: '/dashboard/settings',
		icon: <AiOutlineSetting />,
	},
];

export const DashboardNavigation = () => (
	<nav className="w-14 border-r bg-white">
		<ul className="space-y-1">
			{items.map(({ href, icon }) => (
				<li key={href}>
					<ActiveLink
						href={href}
						className="flex aspect-square items-center justify-center border-l-2 border-transparent text-2xl text-gray-600 hover:text-indigo-600"
						activeClassName="border-indigo-600 text-indigo-600"
					>
						{icon}
					</ActiveLink>
				</li>
			))}
		</ul>
	</nav>
);
