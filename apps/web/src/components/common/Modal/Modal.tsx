import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

import { Footer } from './Footer';
import { Title } from './Title';

const BaseModal = dynamic(
	() => import('./BaseModal').then(({ BaseModal }) => BaseModal),
	{
		ssr: false,
	}
);

export const Modal = (props: ComponentProps<typeof BaseModal>) => (
	<BaseModal {...props} />
);

Modal.Title = Title;
Modal.Footer = Footer;
