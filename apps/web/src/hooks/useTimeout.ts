import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = () => {
	const ref = useRef<NodeJS.Timer | null>(null);

	const startTimeout = useCallback((callback: () => void, ms?: number) => {
		ref.current = setTimeout(callback, ms);
	}, []);

	const stopTimeout = useCallback(() => {
		if (ref.current) {
			clearTimeout(ref.current);
		}
	}, []);

	useEffect(() => {
		return () => {
			stopTimeout();
		};
	}, [stopTimeout]);

	return { startTimeout, stopTimeout };
};
