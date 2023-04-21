'use client';

import { NotificationsProvider } from './NotificationsProvider';

import type { ReactNode } from 'react';

type DashboardProvidersProps = Readonly<{
	children: ReactNode;
}>;

export const DashboardProviders = ({ children }: DashboardProvidersProps) => (
	<NotificationsProvider>{children}</NotificationsProvider>
);
