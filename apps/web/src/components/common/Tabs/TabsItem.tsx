import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type TabsItemProps = Readonly<{
	children: ReactNode;
}>;

export const TabsItem = ({ children }: TabsItemProps) => (
	<Tab as={Fragment}>
		{({ selected }) => (
			<button
				className={twMerge(
					'block border-b-2 border-transparent py-2.5 text-gray-500 focus:outline-none',
					selected
						? 'border-primary-500 font-medium text-black'
						: 'hover:border-gray-300'
				)}
			>
				{children}
			</button>
		)}
	</Tab>
);
