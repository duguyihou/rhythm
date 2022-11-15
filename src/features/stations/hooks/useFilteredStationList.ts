import { useQuery } from '@tanstack/react-query'

import configService from 'config'

import { Station, Filter } from '../components'
import { stationKeys } from './stationKeys'

type Variables = {
  filter: keyof typeof Filter
  offset?: number
  order?: string
  limit?: number
  has_extended_info?: boolean
  is_https?: boolean
  hidebroken?: boolean
}

export const useFilteredStationList = (variables: Variables) => {
  const {
    filter,
    offset = 0,
    order = 'clickcount',
    limit = 10,
    has_extended_info = true,
    is_https = true,
    hidebroken = true,
  } = variables
  const queryResult = useQuery<Station[], Error>({
    queryKey: stationKeys.list(filter),
    queryFn: async () => {
      const url = new URL(`${configService.baseUrl}/stations`)
      const params = new URLSearchParams({
        filter,
        offset: offset.toString(),
        order,
        limit: limit.toString(),
        has_extended_info: has_extended_info.toString(),
        is_https: is_https.toString(),
        hidebroken: hidebroken.toString(),
      })
      url.search = params.toString()
      const res = await fetch(url)
      const result = await res.json()
      return result
    },
    suspense: true,
  })
  return queryResult
}
