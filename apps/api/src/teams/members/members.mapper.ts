import { MemberDto } from './dto/member.dto';
import { Member } from './member.types';

export const mapMemberToMemberDto = ({
	user: { id, firstName, lastName },
	role,
}: Member): MemberDto => ({
	id,
	firstName,
	lastName,
	role,
});

export const mapMembersToMemberDtos = (members: Member[]) =>
	members.map(mapMemberToMemberDto);
