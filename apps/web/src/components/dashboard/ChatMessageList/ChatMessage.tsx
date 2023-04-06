import moment from 'moment';
import { twMerge } from 'tailwind-merge';

import { Avatar } from '@/components/common/Avatar/Avatar';
import type { User } from '@/types';

type ChatMessageProps = Readonly<{
	user: User;
	createdAt: string;
	content: string;
	me?: boolean;
}>;

export const ChatMessage = ({
	user: { firstName, lastName },
	createdAt,
	content,
	me,
}: ChatMessageProps) => {
	const date = new Date(createdAt);

	return (
		<article
			className={twMerge(
				'flex w-fit gap-x-3',
				me && 'ml-auto flex-row-reverse'
			)}
		>
			<Avatar name={firstName} />
			<div
				className={twMerge(
					'space-y-1 rounded-md bg-white p-3 shadow-sm',
					me && 'bg-indigo-100'
				)}
			>
				<div className="flex items-center gap-x-2 text-xs">
					<p className="font-medium">
						{firstName} {lastName}
					</p>
					<time dateTime={date.toISOString()} className="text-gray-700">
						{moment(date).format('MM.DD.YYYY, h:mm:ss')}
					</time>
				</div>
				<p>{content}</p>
			</div>
		</article>
	);
};
