import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

type InputIconProps = Readonly<{
	showPassword: boolean;
	onClick: () => void;
}>;

export const InputIcon = ({ showPassword, onClick }: InputIconProps) => (
	<button
		type="button"
		aria-label={`${showPassword ? 'Hide' : 'Show'} password`}
		onClick={onClick}
		className="text-xl text-gray-600"
	>
		{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
	</button>
);
