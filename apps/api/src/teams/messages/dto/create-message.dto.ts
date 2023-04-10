import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { MAX_TEAM_MESSAGE_LENGTH, TEAM_MESSAGE_ERROR_MESSAGE } from 'common';

import { Trim } from '@/common/decorators/trim.decorator';

export class CreateMessageDto {
	/**
	 * @example Hello!
	 */
	@IsNotEmpty()
	@IsString()
	@MaxLength(MAX_TEAM_MESSAGE_LENGTH, { message: TEAM_MESSAGE_ERROR_MESSAGE })
	@Trim()
	content: string;
}
