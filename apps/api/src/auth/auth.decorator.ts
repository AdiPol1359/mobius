import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiCookieAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { AuthGuard } from './auth.guard';

import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';

export const Auth = () =>
	applyDecorators(
		UseGuards(AuthGuard),
		ApiCookieAuth(),
		ApiUnauthorizedResponse({
			description: 'Incorrect authentication credentials.',
			type: OpenAPIHttpException,
		})
	);
