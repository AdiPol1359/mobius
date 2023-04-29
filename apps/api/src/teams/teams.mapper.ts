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
	role: teamMember?.[0].role,
});

export const mapTeamsToTeamDtos = (teams: Team[]) =>
	teams.map(mapTeamToTeamDto);
