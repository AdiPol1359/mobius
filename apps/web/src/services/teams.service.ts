import { fetcher } from '@/lib/fetcher';

export const getAllTeams = fetcher.path('/teams').method('get').create();
export const createTeam = fetcher.path('/teams').method('post').create();
export const joinTeam = fetcher.path('/teams/join').method('post').create();
export const deleteTeam = fetcher
	.path('/teams/{teamId}')
	.method('delete')
	.create();
