import type { ComponentProps } from 'react';

import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

type ConfirmModalProps = Readonly<{
	title: string;
	onConfirm?: () => void;
}> &
	ComponentProps<typeof Modal>;

export const ConfirmModal = ({
	title,
	onConfirm,
	...props
}: ConfirmModalProps) => {
	return (
		<Modal {...props}>
			<Modal.Title>{title}</Modal.Title>
			<Modal.Footer>
				<Button type="button" onClick={props.onClose}>
					Cancel
				</Button>
				<Button type="button" variant="primary" onClick={onConfirm}>
					Confirm
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
