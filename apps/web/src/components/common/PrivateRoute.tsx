'use client';

import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect } from 'react';

import { useUser } from '@/hooks/useUser';
import { DASHBOARD_PATH, SIGN_IN_PATH } from '@/lib/constants';

type PrivateRouteProps = Readonly<{
	loggedIn?: boolean;
	children: ReactNode;
}>;

export const PrivateRoute = ({
	loggedIn = true,
	children,
}: PrivateRouteProps) => {
	const { user, isLoading } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!isLoading && Boolean(user) !== loggedIn) {
			router.replace(loggedIn ? SIGN_IN_PATH : DASHBOARD_PATH);
		}
	}, [user, router, loggedIn, isLoading]);

	if (isLoading || Boolean(user) !== loggedIn) {
		return null;
	}

	return <>{children}</>;
};
