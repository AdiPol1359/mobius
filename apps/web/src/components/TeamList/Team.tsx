'use client';

import Link from 'next/link';
import { VscEllipsis } from 'react-icons/vsc';

type TeamProps = Readonly<{
	name: string;
}>;

export const Team = ({ name }: TeamProps) => (
	<article className="relative h-60 rounded-md bg-white shadow-sm transition-colors duration-100 hover:bg-neutral-50">
		<button
			type="button"
			className="absolute right-3.5 top-3 text-xl text-gray-500 hover:text-indigo-600"
		>
			<VscEllipsis />
		</button>
		<Link
			href="/dashboard/team/foo"
			className="flex h-full flex-col items-center justify-center"
		>
			<div className="flex h-20 w-20 items-center justify-center rounded-md bg-indigo-600 text-white">
				{name[0].toUpperCase()}
			</div>
			<h3 className="mt-2.5 text-lg font-medium">{name}</h3>
		</Link>
	</article>
);
