import { Prisma } from '@prisma/client';

export const prismaErrorCodes = {
	UniqueKeyViolation: 'P2002',
} as const;

export interface PrismaError extends Prisma.PrismaClientKnownRequestError {
	readonly code: (typeof prismaErrorCodes)[keyof typeof prismaErrorCodes];
}
