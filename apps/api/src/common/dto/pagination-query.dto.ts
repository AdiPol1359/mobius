import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Min } from 'class-validator';

export class PaginationQueryDto {
	@IsOptional()
	@IsNumber()
	@Min(0)
	@Type(() => Number)
	offset?: number;

	@IsOptional()
	@IsNumber()
	@Min(0)
	@Type(() => Number)
	limit?: number;
}
