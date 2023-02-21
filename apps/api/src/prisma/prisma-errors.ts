import { Prisma } from '@prisma/client';

export const prismaErrorCode = {
	UniqueKeyViolation: 'P2002',
} as const;

export interface PrismaError extends Prisma.PrismaClientKnownRequestError {
	readonly code: (typeof prismaErrorCode)[keyof typeof prismaErrorCode];
}
