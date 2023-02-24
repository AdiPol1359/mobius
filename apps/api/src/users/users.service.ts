import {
	ConflictException,
	Inject,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import { PRISMA_TOKEN } from '@/prisma/prisma.module';
import { isPrismaError } from '@/prisma/prisma.utils';
import { prismaErrorCode } from '@/prisma/prisma-errors';

import { CreateUserDto } from './dto/create-user.dto';
import { AppUser } from './users.types';

export const select = {
	id: true,
	email: true,
	password: true,
	firstName: true,
	lastName: true,
} satisfies Prisma.UserSelect;

@Injectable()
export class UsersService {
	constructor(@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient) {}

	async createUser({ password, ...rest }: CreateUserDto): Promise<AppUser> {
		try {
			return await this.prisma.user.create({
				data: {
					password: await bcrypt.hash(password, 10),
					...rest,
				},
				select,
			});
		} catch (err) {
			if (
				isPrismaError(err) &&
				err.code === prismaErrorCode.UniqueKeyViolation
			) {
				throw new ConflictException('User already exists.');
			}

			throw err;
		}
	}

	async getUniqueUser(where: Prisma.UserWhereUniqueInput): Promise<AppUser> {
		const user = await this.prisma.user.findUnique({
			where,
			select,
		});

		if (!user) {
			throw new NotFoundException('User not found.');
		}

		return user;
	}
}
