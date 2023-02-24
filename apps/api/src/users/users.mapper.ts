import { UserDto } from './dto/user.dto';
import { AppUser } from './users.types';

export const userToUserDto = ({
	id,
	email,
	firstName,
	lastName,
}: AppUser): UserDto => ({
	id,
	email,
	firstName,
	lastName,
});
