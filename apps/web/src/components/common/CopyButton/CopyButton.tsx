import { useCallback, useEffect, useRef, useState } from 'react';

import { Button } from '../Button/Button';

type CopyButtonProps = Readonly<{
	value: string;
	text: string;
	copiedText: string;
}>;

export const CopyButton = ({ value, text, copiedText }: CopyButtonProps) => {
	const [isCopied, setIsCopied] = useState(false);

	const ref = useRef<NodeJS.Timer | null>(null);

	const clearButtonTimeout = useCallback(() => {
		if (ref.current) {
			clearTimeout(ref.current);
		}
	}, []);

	const handleButtonClick = () => {
		clearButtonTimeout();
		setIsCopied(true);

		navigator.clipboard.writeText(value);
		ref.current = setTimeout(() => setIsCopied(false), 1000);
	};

	useEffect(() => {
		return () => {
			clearButtonTimeout();
		};
	}, [clearButtonTimeout]);

	return (
		<Button variant="default" onClick={handleButtonClick}>
			{isCopied ? copiedText : text}
		</Button>
	);
};
