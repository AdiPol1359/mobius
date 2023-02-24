import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { userToUserDto } from './users.mapper';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
		return userToUserDto(await this.usersService.createUser(createUserDto));
	}
}
