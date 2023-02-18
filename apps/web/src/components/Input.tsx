import { twMerge } from 'tailwind-merge';

export const Input = ({
	className,
	...props
}: JSX.IntrinsicElements['input']) => (
	<input
		className={twMerge(
			'w-full rounded-md border bg-white px-3 py-1.5 text-neutral-900 shadow-sm focus:outline-none',
			className
		)}
		{...props}
	/>
);
