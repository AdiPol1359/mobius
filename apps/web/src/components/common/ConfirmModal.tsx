import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

import type { ComponentProps } from 'react';

type ConfirmModalProps = Readonly<{
	title: string;
	disabled?: boolean;
	onConfirm?: () => void;
}> &
	ComponentProps<typeof Modal>;

export const ConfirmModal = ({
	title,
	disabled,
	onConfirm,
	...props
}: ConfirmModalProps) => (
	<Modal {...props}>
		<Modal.Title>{title}</Modal.Title>
		<Modal.Footer>
			<Button type="button" onClick={props.onClose}>
				Cancel
			</Button>
			<Button
				type="button"
				variant="primary"
				disabled={disabled}
				onClick={onConfirm}
			>
				Confirm
			</Button>
		</Modal.Footer>
	</Modal>
);
