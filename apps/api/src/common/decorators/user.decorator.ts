import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export const User = createParamDecorator(
	(data: unknown, ctx: ExecutionContext) =>
		ctx.switchToHttp().getRequest<Request>().user
);
