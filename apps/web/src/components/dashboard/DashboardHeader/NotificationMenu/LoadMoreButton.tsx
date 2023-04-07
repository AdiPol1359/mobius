import { Button } from '@/components/common/Button/Button';
import { useNotifications } from '@/hooks/useNotifications';

export const LoadMoreButton = () => {
	const { isFetchingNextPage, hasNextPage, fetchNextPage } = useNotifications();

	return hasNextPage ? (
		<Button
			onClick={() => fetchNextPage()}
			disabled={isFetchingNextPage}
			fullWidth
		>
			Load more
		</Button>
	) : null;
};
