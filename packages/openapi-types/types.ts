/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
	'/users': {
		post: operations['UsersController_createUser'];
	};
	'/sessions/me': {
		get: operations['SessionsController_getMeSession'];
	};
	'/sessions': {
		post: operations['SessionsController_createSession'];
		delete: operations['SessionsController_deleteSession'];
	};
}

export type webhooks = Record<string, never>;

export interface components {
	schemas: {
		CreateUserDto: {
			/** @example example@example.com */
			email: string;
			/** @example Pass123! */
			password: string;
			/** @example John */
			firstName: string;
			/** @example Burton */
			lastName: string;
		};
		UserDto: {
			/** @example 1 */
			id: number;
			/** @example example@example.com */
			email: string;
			/** @example John */
			firstName: string;
			/** @example Burton */
			lastName: string;
		};
		OpenAPIHttpException: {
			statusCode: number;
			message: string;
			error?: string;
		};
		CreateSessionDto: {
			/** @example example@example.com */
			email: string;
			/** @example Pass123! */
			password: string;
		};
	};
	responses: never;
	parameters: never;
	requestBodies: never;
	headers: never;
	pathItems: never;
}

export type external = Record<string, never>;

export interface operations {
	UsersController_createUser: {
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateUserDto'];
			};
		};
		responses: {
			201: {
				content: {
					'application/json': components['schemas']['UserDto'];
				};
			};
			/** @description User already exists. */
			409: {
				content: {
					'application/json': components['schemas']['OpenAPIHttpException'];
				};
			};
		};
	};
	SessionsController_getMeSession: {
		responses: {
			200: {
				content: {
					'application/json': components['schemas']['UserDto'];
				};
			};
			/** @description Incorrect authentication credentials. */
			401: {
				content: {
					'application/json': components['schemas']['OpenAPIHttpException'];
				};
			};
		};
	};
	SessionsController_createSession: {
		requestBody: {
			content: {
				'application/json': components['schemas']['CreateSessionDto'];
			};
		};
		responses: {
			201: {
				content: {
					'application/json': components['schemas']['UserDto'];
				};
			};
			/** @description Incorrect email or password. */
			401: {
				content: {
					'application/json': components['schemas']['OpenAPIHttpException'];
				};
			};
			/** @description User not found. */
			404: {
				content: {
					'application/json': components['schemas']['OpenAPIHttpException'];
				};
			};
		};
	};
	SessionsController_deleteSession: {
		responses: {
			204: never;
			/** @description Incorrect authentication credentials. */
			401: {
				content: {
					'application/json': components['schemas']['OpenAPIHttpException'];
				};
			};
		};
	};
}
