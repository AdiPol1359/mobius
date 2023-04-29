import type { FieldNamesMarkedBoolean } from 'react-hook-form';
import type { Schema, TypeOf } from 'zod';

export const getDirtyData = <T extends Schema, D extends TypeOf<T> = TypeOf<T>>(
	dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<D>>>,
	data: D
) => {
	const keys = Object.keys(dirtyFields);
	const entries = keys.map((key) => [key, data[key]]);

	return Object.fromEntries(entries) as Partial<D>;
};
