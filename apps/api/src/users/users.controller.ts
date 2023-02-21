import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AppUser } from './users.types';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	createUser(@Body() createUserDto: CreateUserDto): Promise<AppUser> {
		return this.usersService.createUser(createUserDto);
	}
}
