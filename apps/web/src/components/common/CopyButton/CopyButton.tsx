import { useState } from 'react';

import { Button } from '../Button/Button';

import { useTimeout } from '@/hooks/useTimeout';

type CopyButtonProps = Readonly<{
	value: string;
	text: string;
	copiedText: string;
}>;

export const CopyButton = ({ value, text, copiedText }: CopyButtonProps) => {
	const [isCopied, setIsCopied] = useState(false);
	const { startTimeout, stopTimeout } = useTimeout();

	const handleButtonClick = async () => {
		await navigator.clipboard.writeText(value);

		stopTimeout();
		setIsCopied(true);
		startTimeout(() => setIsCopied(false), 1000);
	};

	return (
		<Button variant="default" onClick={handleButtonClick}>
			{isCopied ? copiedText : text}
		</Button>
	);
};
