import { Body, Controller, Post } from '@nestjs/common';
import { ApiConflictResponse, ApiTags } from '@nestjs/swagger';

import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';

import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { mapUserToUserDto } from './users.mapper';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@ApiConflictResponse({
		description: 'User already exists.',
		type: OpenAPIHttpException,
	})
	async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
		return mapUserToUserDto(await this.usersService.createUser(createUserDto));
	}
}
