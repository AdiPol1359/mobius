// TODO: ADD TESTS
export const calculateMenuPosition = ({
	screenWidth,
	menuWidth,
	buttonWidth,
	buttonHeight,
	buttonX,
	buttonY,
}: Readonly<{
	screenWidth: number;
	menuWidth: number;
	buttonWidth: number;
	buttonHeight: number;
	buttonX: number;
	buttonY: number;
}>) => {
	const positionX = buttonX - (menuWidth - buttonWidth) / 2;
	const menuSize = positionX + menuWidth - screenWidth;
	const x =
		positionX < 0 ? 0 : menuSize > 0 ? screenWidth - menuWidth : positionX;
	const y = buttonY + buttonHeight + 6;

	return { x, y };
};
