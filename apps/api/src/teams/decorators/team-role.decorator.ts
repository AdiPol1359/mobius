import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiForbiddenResponse } from '@nestjs/swagger';
import { TeamMemberRole } from '@prisma/client';

import { TeamGuard } from '../team.guard';

import { OpenAPIHttpException } from '@/common/exceptions/openapi-http.exception';

export const TeamRole = (...roles: TeamMemberRole[]) =>
	applyDecorators(
		SetMetadata('roles', roles),
		UseGuards(TeamGuard),
		ApiForbiddenResponse({
			description: 'Missing role in the team.',
			type: OpenAPIHttpException,
		})
	);
