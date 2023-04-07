import moment from 'moment';
import { MdTaskAlt } from 'react-icons/md';

import { Icon } from '@/components/common/Icon/Icon';

import type { Notification } from '@/types';

type NotificationItemProps = Readonly<{
	notification: Notification;
}>;

export const NotificationItem = ({
	notification: { createdAt, content },
}: NotificationItemProps) => {
	const date = new Date(createdAt);

	return (
		<li className="flex w-72 gap-x-4 border-b bg-white px-2 py-3.5 last:border-none">
			<Icon variant="green" icon={<MdTaskAlt />} />
			<div className="flex-1 whitespace-normal">
				<p className="break-all">{content}</p>
				<time
					dateTime={date.toISOString()}
					className="mt-1 block text-gray-700"
				>
					{moment(date, 'YYYYMMDD').fromNow()}
				</time>
			</div>
		</li>
	);
};
