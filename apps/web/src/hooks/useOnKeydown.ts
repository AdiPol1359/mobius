import { useWindowEvent } from './useWindowEvent';

export const useOnKeydown = (key: string, handler: () => void) => {
	useWindowEvent('keydown', (event) => {
		if (event.key === key) {
			handler();
		}
	});
};
