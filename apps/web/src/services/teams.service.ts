import { fetcher } from '@/lib/fetcher';

export const getAllTeams = fetcher.path('/teams').method('get').create();
