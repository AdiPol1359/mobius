export type ServerToClientNotificationsEvents = {
	[P in `notification:${number}`]: (content: string) => void;
};
