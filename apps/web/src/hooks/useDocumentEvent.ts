import { useEffect } from 'react';

export const useDocumentEvent = <T extends keyof DocumentEventMap>(
	type: T,
	handler: (event: DocumentEventMap[T]) => unknown
) => {
	useEffect(() => {
		document.addEventListener(type, handler);

		return () => {
			document.removeEventListener(type, handler);
		};
	}, [type, handler]);
};
