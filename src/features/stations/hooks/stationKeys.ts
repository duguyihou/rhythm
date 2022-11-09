import { Filter } from '../components'

export const stationKeys = {
  all: ['stations'] as const,
  lists: () => [...stationKeys.all, 'list'] as const,
  list: (filter: keyof typeof Filter) =>
    [...stationKeys.lists(), { filter }] as const,
  searchList: (name: string) =>
    [...stationKeys.all, 'searchList', { name }] as const,
}
