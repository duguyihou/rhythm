import { useQuery } from '@tanstack/react-query'

import configService from 'config'

import { Station, Filter } from '../components'
import { stationKeys } from './stationKeys'

type Variables = { filter: keyof typeof Filter; offset: number }

export const useFilteredStationList = (variables: Variables) => {
  const { filter, offset } = variables
  const queryResult = useQuery<Station[], Error>({
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
