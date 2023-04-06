'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import type { ReactNode } from 'react';

type AppProvidersProps = Readonly<{
	children: ReactNode;
}>;

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const AppProviders = ({ children }: AppProvidersProps) => (
	<QueryClientProvider client={queryClient}>
		{children}
		<ReactQueryDevtools />
		<Toaster
			position="top-right"
			toastOptions={{ custom: { duration: 2000 } }}
		/>
	</QueryClientProvider>
);
