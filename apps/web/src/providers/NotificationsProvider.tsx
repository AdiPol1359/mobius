import { useCallback, useState } from 'react';

import { createSafeContext } from '@/lib/createSafeContext';

import type { ReactNode } from 'react';

interface NotificationsContextValue {
	readonly isUnread: boolean;
	readonly enableIsUnread: () => void;
	readonly disableIsUnread: () => void;
}

const [NotificationsContextProvider, useNotificationsContext] =
	createSafeContext<NotificationsContextValue>();

const NotificationsProvider = ({
	children,
}: {
	readonly children: ReactNode;
}) => {
	const [isUnread, setIsUnread] = useState(false);

	const enableIsUnread = useCallback(() => setIsUnread(true), []);
	const disableIsUnread = useCallback(() => setIsUnread(false), []);

	return (
		<NotificationsContextProvider
			value={{
				isUnread,
				enableIsUnread,
				disableIsUnread,
			}}
		>
			{children}
		</NotificationsContextProvider>
	);
};

export { NotificationsProvider, useNotificationsContext };
