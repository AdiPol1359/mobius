import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';

import { UsersService } from '@/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private readonly usersService: UsersService) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<Request>();
		const { userId } = request.session;

		if (!userId) {
			throw new UnauthorizedException();
		}

		request.user = await this.usersService.getUniqueUser({
			id: userId,
		});

		return true;
	}
}
