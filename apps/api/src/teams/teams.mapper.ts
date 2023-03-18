import { TeamDto } from './dto/team.dto';
import { Team } from './teams.types';

export const mapTeamToTeamDto = ({ id, name, teamMember }: Team): TeamDto => ({
	id,
	name,
	roles: teamMember?.flatMap(({ roles }) => roles),
});

export const mapTeamsToTeamDtos = (teams: TeamDto[]) =>
	teams.map(mapTeamToTeamDto);
