import { UserDto } from './dto/user.dto';
import { AppUser } from './users.types';

export const mapUserToUserDto = ({
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
