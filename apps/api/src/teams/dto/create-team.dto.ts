import { IsNotEmpty, IsString } from 'class-validator';

import { Trim } from '@/common/decorators/trim.decorator';

export class CreateTeamDto {
	/**
	 * @example FooTeam
	 */
	@IsNotEmpty()
	@IsString()
	@Trim()
	name: string;
}
