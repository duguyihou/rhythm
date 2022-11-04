import { useQuery } from '@tanstack/react-query'

import configService from '../../../config'
import { Station, Filter } from '../components/stationList'

export const stationKeys = {
  all: ['stations'] as const,
  lists: () => [...stationKeys.all, 'list'] as const,
  list: (filter: keyof typeof Filter) =>
    [...stationKeys.lists(), { filter }] as const,
}

type Variables = { filter: keyof typeof Filter; offset: number }

export const useStationList = (variables: Variables) => {
  const { filter, offset } = variables
  const queryResult = useQuery<Station[], Variables, Error>({
    queryKey: stationKeys.list(filter),
    queryFn: async () => {
      const url = `${configService.baseUrl}/stations/${filter}${
        offset ? `/${offset}` : ''
      }`
      const res = await fetch(url)
      const result = await res.json()
      return result
    },
    suspense: true,
  })
  return queryResult
}
