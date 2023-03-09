import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTeamDto {
	/**
	 * @example FooTeam
	 */
	@IsNotEmpty()
	@IsString()
	name: string;
}
