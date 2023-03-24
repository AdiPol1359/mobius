import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

import { Footer } from './Footer';
import { Title } from './Title';

const Modal = dynamic(() => import('./Modal').then(({ Modal }) => Modal), {
	ssr: false,
});

export const BaseModal = (props: ComponentProps<typeof Modal>) => (
	<Modal {...props} />
);

BaseModal.Title = Title;
BaseModal.Footer = Footer;
