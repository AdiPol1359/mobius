import { MemberDto } from './dto/member.dto';
import { Member } from './member.types';

export const mapMemberToMemberDto = ({
	user: { id, firstName, lastName },
	roles,
}: Member): MemberDto => ({
	id,
	firstName,
	lastName,
	roles,
});

export const mapMembersToMemberDtos = (members: Member[]) =>
	members.map(mapMemberToMemberDto);
