import moment from 'moment';
import { MdTaskAlt } from 'react-icons/md';

type NotificationProps = Readonly<{
	time: number;
	content: string;
}>;

export const Notification = ({ time, content }: NotificationProps) => {
	const date = new Date(time);

	return (
		<li className="flex w-72 gap-x-4 border-b px-2 py-3.5 last:border-none">
			<div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-xl text-green-700">
				<MdTaskAlt />
			</div>
			<div className="flex-1 whitespace-normal">
				<p>{content}</p>
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
