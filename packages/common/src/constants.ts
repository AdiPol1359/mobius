export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[0-9]).{6,20}$/;
export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const TEAM_CODE_LENGTH = 8;

export const PASSWORD_ERROR_MESSAGE =
	'The password must be between 6 and 20 characters long and must contain at least one uppercase letter and one number';
export const EMAIL_ERROR_MESSAGE = 'Please enter a valid email address';
export const TEAM_CODE_ERROR_MESSAGE =
	'The team code must be 8 characters long';
