import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteTeamDto {
	/**
	 * @example FooTeam
	 */
	@IsNotEmpty()
	@IsString()
	name: string;
}
