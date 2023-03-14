'use client';

import type { ButtonHTMLAttributes } from 'react';

import { useMenuContext } from './MenuProvider';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	const { isActive, buttonId, dropdownId, openMenu } = useMenuContext();

	const label = `${isActive ? 'Hide' : 'Show'} ${dropdownId} menu`;

	return (
		<button
			id={buttonId}
			type="button"
			onClick={openMenu}
			aria-haspopup="menu"
			aria-expanded={isActive}
			aria-controls={dropdownId}
			aria-label={label}
			{...props}
		/>
	);
};
