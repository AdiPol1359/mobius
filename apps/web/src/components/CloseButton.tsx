import { MdClose } from 'react-icons/md';

type CloseButtonProps = Readonly<{
	label: string;
	className?: string;
	onClick?: () => void;
}>;

export const CloseButton = ({
	label,
	className,
	onClick,
}: CloseButtonProps) => (
	<button
		type="button"
		className={className}
		aria-label={label}
		onClick={onClick}
	>
		<MdClose />
	</button>
);
