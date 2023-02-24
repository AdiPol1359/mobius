import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UsersService } from '@/users/users.service';
import { AppUser } from '@/users/users.types';

@Injectable()
export class AuthService {
	constructor(private readonly usersService: UsersService) {}

	async authenticate(email: string, password: string): Promise<AppUser> {
		const user = await this.usersService.getUniqueUser({ email });

		if (!(await bcrypt.compare(password, user.password))) {
			throw new UnauthorizedException('Incorrect email or password.');
		}

		return user;
	}
}
