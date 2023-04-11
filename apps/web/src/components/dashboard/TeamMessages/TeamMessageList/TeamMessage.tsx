import moment from 'moment';
import { twMerge } from 'tailwind-merge';

import { Avatar } from '@/components/common/Avatar/Avatar';

import type { Message } from '@/types';

type TeamMessageProps = Readonly<{
	message: Message;
	me?: boolean;
}>;

export const TeamMessage = ({
	message: {
		author: { firstName, lastName },
		createdAt,
		content,
	},
	me,
}: TeamMessageProps) => {
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
					'max-w-sm space-y-1 rounded-md bg-white p-3 shadow-sm',
					me && 'bg-indigo-100'
				)}
			>
				<div className="flex items-center gap-x-2 text-xs">
					<p className="font-medium">
						{firstName} {lastName}
					</p>
					<time dateTime={date.toISOString()} className="text-gray-700">
						{moment(date).format('MM.DD.YYYY, hh:mm:ss A')}
					</time>
				</div>
				<p className="break-words">{content}</p>
			</div>
		</article>
	);
};
