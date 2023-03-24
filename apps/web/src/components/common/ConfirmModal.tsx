import type { ComponentProps } from 'react';

import { BaseModal } from './BaseModal/BaseModal';
import { Button } from './Button/Button';

type ConfirmModalProps = Readonly<{
	title: string;
	onConfirm?: () => void;
}> &
	ComponentProps<typeof BaseModal>;

export const ConfirmModal = ({
	title,
	onConfirm,
	...props
}: ConfirmModalProps) => {
	return (
		<BaseModal {...props}>
			<BaseModal.Title>{title}</BaseModal.Title>
			<BaseModal.Footer>
				<Button type="button" onClick={props.onClose}>
					Cancel
				</Button>
				<Button type="button" variant="primary" onClick={onConfirm}>
					Confirm
				</Button>
			</BaseModal.Footer>
		</BaseModal>
	);
};
