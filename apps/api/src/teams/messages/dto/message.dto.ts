class AuthorDto {
	/**
	 * @example John
	 */
	firstName: string;

	/**
	 * @example Burton
	 */
	lastName: string;
}

export class MessageDto {
	/**
	 * @example 10
	 */
	id: number;

	/**
	 * @example Hello!
	 */
	content: string;

	/**
	 * @example 2023-06-04T12:00:00
	 */
	createdAt: string;

	/**
	 * @example 2023-06-05T15:00:00
	 */
	updatedAt: string;

	author: AuthorDto;
}
