import { twMerge } from 'tailwind-merge';

export const Button = ({
	className,
	...props
}: JSX.IntrinsicElements['button']) => (
	<button
		className={twMerge(
			'flex items-center gap-x-1 rounded-md border bg-white px-3 py-1.5 text-neutral-900 shadow-sm hover:bg-gray-50',
			className
		)}
		{...props}
	/>
);
