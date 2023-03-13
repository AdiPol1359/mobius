import { useCallback, useState } from 'react';

import type { Variant } from '@/components/Alert/Alert';

interface Alert {
	readonly variant: Variant;
	readonly content: string;
}

export const useAlert = () => {
	const [alert, setAlert] = useState<Alert | null>(null);

	const showAlert = useCallback((alert: Alert) => setAlert(alert), []);
	const hideAlert = useCallback(() => setAlert(null), []);

	return { alert, showAlert, hideAlert };
};
