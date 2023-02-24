import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import session from 'express-session';
import ms from 'ms';

import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.use(
		session({
			name: 'sessionId',
			secret: 'secret123',
			rolling: true,
			resave: false,
			saveUninitialized: false,
			cookie: {
				maxAge: ms('1h'),
			},
		})
	);

	await app
		.useGlobalPipes(new ValidationPipe({ whitelist: true }))
		.listen(8080);
}

bootstrap();
