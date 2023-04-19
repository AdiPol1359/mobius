import { TeamDto } from './dto/team.dto';
import { Team } from './teams.types';

export const mapTeamToTeamDto = ({
	id,
	name,
	teamMember,
	teamCode,
}: Team): TeamDto => ({
	id,
	name,
	code: teamCode?.code,
	roles: teamMember?.flatMap(({ roles }) => roles),
});

export const mapTeamsToTeamDtos = (teams: Team[]) =>
	teams.map(mapTeamToTeamDto);
