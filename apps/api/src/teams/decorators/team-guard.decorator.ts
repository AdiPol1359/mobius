import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { TeamMemberRole } from '@prisma/client';

import { TeamGuard as Guard } from '../guards/team.guard';

import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';

export const TeamGuard = (...roles: TeamMemberRole[]) =>
	applyDecorators(
		SetMetadata('roles', roles),
		UseGuards(Guard),
		ApiNotFoundResponse({
			description: 'Team member not found.',
			type: OpenAPIHttpException,
		}),
		ApiForbiddenResponse({
			description: 'Missing role in the team.',
			type: OpenAPIHttpException,
		})
	);
