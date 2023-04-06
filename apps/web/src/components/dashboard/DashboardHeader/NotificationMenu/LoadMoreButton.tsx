import { Button } from '@/components/common/Button/Button';
import { useNotifications } from '@/hooks/useNotifications';

export const LoadMoreButton = () => {
	const { hasNextPage, fetchNextPage } = useNotifications();

	return hasNextPage ? (
		<Button disabled={!hasNextPage} onClick={() => fetchNextPage()} fullWidth>
			Load more
		</Button>
	) : null;
};