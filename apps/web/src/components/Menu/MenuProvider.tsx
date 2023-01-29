import type { ReactNode } from 'react';
import { useCallback, useId, useState } from 'react';

import { createSafeContext } from '@/lib/createSafeContext';

interface MenuContextValue {
	readonly isActive: boolean;
	readonly buttonId: string;
	readonly dropdownId: string;
	readonly openMenu: () => void;
	readonly closeMenu: () => void;
}

const [MenuContextProvider, useMenuContext] =
	createSafeContext<MenuContextValue>();

const MenuProvider = ({ children }: { readonly children: ReactNode }) => {
	const [isActive, setIsActive] = useState(false);

	const buttonId = useId();
	const dropdownId = useId();

	const openMenu = useCallback(() => setIsActive(true), []);
	const closeMenu = useCallback(() => setIsActive(false), []);

	return (
		<MenuContextProvider
			value={{ isActive, buttonId, dropdownId, openMenu, closeMenu }}
		>
			{children}
		</MenuContextProvider>
	);
};

export { MenuProvider, useMenuContext };
