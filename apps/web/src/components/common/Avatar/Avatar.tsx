import { getFirstLetter } from '@/utils/string';

type AvatarProps = Readonly<{
	name: string;
}>;

export const Avatar = ({ name }: AvatarProps) => (
	<div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 font-medium text-white">
		{getFirstLetter(name)}
	</div>
);
