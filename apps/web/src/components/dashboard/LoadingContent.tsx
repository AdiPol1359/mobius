import { Spinner } from '../common/Spinner/Spinner';

import type { Size } from '../common/Spinner/Spinner';
import type { ReactNode } from 'react';

type LoadingContentProps = Readonly<{
	isLoading: boolean;
	size?: Size;
	children?: ReactNode;
}>;

export const LoadingContent = ({
	isLoading,
	size,
	children,
}: LoadingContentProps) => {
	if (isLoading) {
		return (
			<div className="flex h-full items-center justify-center">
				<Spinner size={size} />
			</div>
		);
	}

	return <>{children}</>;
};
