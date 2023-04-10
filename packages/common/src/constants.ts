export const NAME_REGEX = /^[a-zA-Z]{1,30}$/;
export const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[0-9]).{6,20}$/;

export const TEAM_CODE_LENGTH = 8;
export const MAX_TEAM_NAME_LENGTH = 40;
export const MAX_TEAM_MESSAGE_LENGTH = 150;

export const FIRST_NAME_ERROR_MESSAGE =
	'The first name can only contain letters and can be up to 30 characters long';
export const LAST_NAME_ERROR_MESSAGE =
	'The last name can only contain letters and can be up to 30 characters long';
export const EMAIL_ERROR_MESSAGE = 'Please enter a valid email address';
export const PASSWORD_ERROR_MESSAGE =
	'The password must be between 6 and 20 characters long and must contain at least one uppercase letter and one number';
export const TEAM_CODE_ERROR_MESSAGE =
	'The team code must be 8 characters long';
export const TEAM_NAME_ERROR_MESSAGE =
	'The team name must be up to 40 characters long';
export const TEAM_MESSAGE_ERROR_MESSAGE = 'The message is too long';
