import { MdClose } from 'react-icons/md';

type CloseButtonProps = Readonly<{
	onClick: () => void;
}>;

export const CloseButton = ({ onClick }: CloseButtonProps) => (
	<button
		type="button"
		aria-label="Close modal"
		className="absolute right-3 top-3.5 text-lg text-gray-900 hover:text-gray-800"
		onClick={onClick}
	>
		<MdClose />
	</button>
);
