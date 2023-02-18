import { MdClose } from 'react-icons/md';

type CloseButtonProps = Readonly<{
	onClick: () => void;
}>;

export const CloseButton = ({ onClick }: CloseButtonProps) => (
	<button
		type="button"
		aria-label="Close modal"
		className="absolute right-3 top-3.5 text-lg text-gray-500 transition-colors hover:text-gray-900"
		onClick={onClick}
	>
		<MdClose />
	</button>
);
