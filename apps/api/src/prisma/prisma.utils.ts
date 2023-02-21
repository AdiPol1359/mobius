import { Prisma } from '@prisma/client';

import type { PrismaError } from './prisma-errors';

export const isPrismaError = (err: unknown): err is PrismaError =>
	err instanceof Prisma.PrismaClientKnownRequestError;
