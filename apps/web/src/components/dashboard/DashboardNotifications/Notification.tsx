import { Transition } from '@headlessui/react';
import { AiOutlineBell } from 'react-icons/ai';

import { Icon } from '@/components/common/Icon/Icon';

type NotificationProps = Readonly<{
	isActive: boolean;
	content: string;
}>;

export const Notification = ({ isActive, content }: NotificationProps) => (
	<Transition
		appear={true}
		show={isActive}
		enter="transition duration-300"
		enterFrom="opacity-0 -translate-y-4"
		enterTo="opacity-100 translate-y-0"
		leave="transition duration-300"
		leaveFrom="opacity-100 translate-y-0"
		leaveTo="opacity-0 translate-y-4"
		className="flex items-center gap-x-3 rounded-md bg-white p-3 shadow-md"
	>
		<Icon variant="blue" icon={<AiOutlineBell />} />
		{content}
	</Transition>
);
