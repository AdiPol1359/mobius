import { twMerge } from 'tailwind-merge';

const variants = {
	default: 'bg-white text-neutral-900 hover:bg-gray-50',
	primary: 'border-indigo-500 bg-indigo-600 text-white hover:bg-indigo-700',
} as const;

type ButtonProps = Readonly<{
	variant?: keyof typeof variants;
}> &
	JSX.IntrinsicElements['button'];

export const Button = ({
	variant = 'default',
	className,
	...props
}: ButtonProps) => (
	<button
		className={twMerge(
			'flex items-center justify-center gap-x-1 rounded-md border px-3 py-1.5 shadow-sm transition-colors',
			variants[variant],
			className
		)}
		{...props}
	/>
);
