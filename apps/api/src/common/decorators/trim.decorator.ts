import { applyDecorators } from '@nestjs/common';
import { Transform } from 'class-transformer';

export const Trim = () =>
	applyDecorators(
		Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
	);
