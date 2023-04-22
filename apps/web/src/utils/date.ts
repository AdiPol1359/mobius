import dayjs, { extend } from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

extend(relativeTime);

export const format = (date?: Date) =>
	dayjs(date).format('MM.DD.YYYY, hh:mm:ss A');

export const fromNow = (date?: Date) => dayjs(date).fromNow();
