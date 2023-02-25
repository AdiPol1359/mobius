import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppConfigService } from '@/app.configuration';

export const swaggerSetup = (
	app: INestApplication,
	configService: AppConfigService
) => {
	const config = new DocumentBuilder()
		.setTitle('Mobius API')
		.setDescription('Mobius Rest API documentation.')
		.setVersion('1.0.0')
		.setLicense('MIT', 'https://opensource.org/licenses/MIT')
		.addCookieAuth(configService.get('SESSION_COOKIE_NAME'))
		.build();
	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('docs', app, document);
};
