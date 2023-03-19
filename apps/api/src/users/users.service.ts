import {
	ConflictException,
	Inject,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import { AppConfigService } from '@/app.configuration';
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
	constructor(
		@Inject(PRISMA_TOKEN) private readonly prisma: PrismaClient,
		@Inject(ConfigService) private readonly configService: AppConfigService
	) {}

	async createUser({
		email,
		firstName,
		lastName,
		password,
	}: CreateUserDto): Promise<AppUser> {
		try {
			return await this.prisma.user.create({
				data: {
					email,
					firstName,
					lastName,
					password: await this.hashPassword(password),
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

	async getUser(where: Prisma.UserWhereUniqueInput): Promise<AppUser> {
		const user = await this.prisma.user.findUnique({
			where,
			select,
		});

		if (!user) {
			throw new NotFoundException('User not found.');
		}

		return user;
	}

	private hashPassword(password: string): Promise<string> {
		return bcrypt.hash(password, this.configService.get('SALT_OR_ROUNDS'));
	}
}
