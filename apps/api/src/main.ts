import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import session from 'express-session';
import ms from 'ms';

import { AppConfigService } from './app.configuration';
import { AppModule } from './app.module';
import { swaggerSetup } from './common/setups/swagger.setup';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	const configService = app.get<AppConfigService>(ConfigService);

	swaggerSetup(app, configService);

	app.enableCors({
		origin: configService.get('CORS_ORIGIN'),
		credentials: true,
	});

	app.use(
		session({
			name: configService.get('SESSION_COOKIE_NAME'),
			secret: configService.get('SESSION_COOKIE_SECRET'),
			rolling: true,
			resave: false,
			saveUninitialized: false,
			cookie: {
				maxAge: ms(configService.get<string>('SESSION_COOKIE_MAX_AGE')),
			},
		})
	);

	await app
		.useGlobalPipes(new ValidationPipe({ whitelist: true }))
		.listen(configService.get('PORT'), configService.get('HOST'));
}

bootstrap();
