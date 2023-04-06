import dynamic from 'next/dynamic';

import { ModalFooter } from './ModalFooter';
import { ModalTitle } from './ModalTitle';

import type { ComponentProps } from 'react';

const BaseModal = dynamic(
	() => import('./BaseModal').then(({ BaseModal }) => BaseModal),
	{
		ssr: false,
	}
);

export const Modal = (props: ComponentProps<typeof BaseModal>) => (
	<BaseModal {...props} />
);

Modal.Title = ModalTitle;
Modal.Footer = ModalFooter;
