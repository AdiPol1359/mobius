import { twMerge } from 'tailwind-merge';

const variants = {
	default: 'bg-white text-neutral-900 enabled:hover:bg-gray-50',
	danger: 'border-red-700 text-red-700',
	primary:
		'border-primary-500 bg-primary text-white enabled:hover:bg-primary-700',
	text: 'border-transparent shadow-none text-primary font-medium enabled:hover:text-primary-700',
} as const;

type ButtonProps = Readonly<{
	variant?: keyof typeof variants;
	fullWidth?: boolean;
}> &
	JSX.IntrinsicElements['button'];

export const Button = ({
	variant = 'default',
	fullWidth,
	className,
	...props
}: ButtonProps) => (
	<button
		className={twMerge(
			'flex items-center justify-center gap-x-1 rounded-md border px-3 py-1.5 shadow-sm transition-all disabled:opacity-70',
			variants[variant],
			fullWidth ? 'w-full' : 'w-fit',
			className
		)}
		{...props}
	/>
);
