export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[0-9]).{6,20}$/;
export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const PASSWORD_ERROR_MESSAGE =
	'The password must be between 6 and 20 characters long and must contain at least one uppercase letter and one number';

export const EMAIL_ERROR_MESSAGE = 'The e-mail address is invalid';
