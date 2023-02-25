import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiCookieAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';

import { AuthGuard } from './auth.guard';

export const Auth = () =>
	applyDecorators(
		UseGuards(AuthGuard),
		ApiCookieAuth(),
		ApiUnauthorizedResponse({
			description: 'Incorrect authentication credentials.',
			type: OpenAPIHttpException,
		})
	);
