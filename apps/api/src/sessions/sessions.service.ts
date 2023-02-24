import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';

import { AuthService } from '@/auth/auth.service';
import { AppUser } from '@/users/users.types';

import { CreateSessionDto } from './dto/create-session.dto';
import { ExpressSession } from './sessions.types';

@Injectable()
export class SessionsService {
	constructor(private readonly authService: AuthService) {}

	async createSession(
		{ email, password }: CreateSessionDto,
		session: ExpressSession
	): Promise<AppUser> {
		const user = await this.authService.authenticate(email, password);

		session.userId = user.id;
		return user;
	}

	async deleteSession(
		response: Response,
		session: ExpressSession
	): Promise<void> {
		return new Promise((resolve, reject) => {
			session.destroy((err) => {
				if (err) {
					return reject(new InternalServerErrorException());
				}

				response.clearCookie('sessionId');
				resolve();
			});
		});
	}
}
