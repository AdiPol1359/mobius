import { fetcher } from '@/lib/fetcher';

export const getAllTeams = fetcher.path('/teams').method('get').create();
export const getTeamById = fetcher
	.path('/teams/{teamId}')
	.method('get')
	.create();
export const createTeam = fetcher.path('/teams').method('post').create();
export const joinTeam = fetcher.path('/teams/join').method('post').create();
export const deleteTeam = fetcher
	.path('/teams/{teamId}')
	.method('delete')
	.create();
export const leaveTeam = fetcher
	.path('/teams/{teamId}/leave')
	.method('post')
	.create();
export const getTeamMessages = fetcher
	.path('/teams/{teamId}/messages')
	.method('get')
	.create();
export const createTeamMessage = fetcher
	.path('/teams/{teamId}/messages')
	.method('post')
	.create();
export const updateTeam = fetcher
	.path('/teams/{teamId}')
	.method('patch')
	.create();
