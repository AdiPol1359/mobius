import { IsNotEmpty, IsString } from 'class-validator';

import { Trim } from '@/common/decorators/trim.decorator';

export class DeleteTeamDto {
	/**
	 * @example FooTeam
	 */
	@IsNotEmpty()
	@IsString()
	@Trim()
	name: string;
}
