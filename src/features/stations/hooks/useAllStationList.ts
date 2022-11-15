import { useQuery } from '@tanstack/react-query'

import configService from 'config'

import { Station } from '../components'
import { stationKeys } from './stationKeys'

type Variables = {
  offset?: number
  order?: string
  limit?: number
  has_extended_info?: boolean
  is_https?: boolean
  hidebroken?: boolean
}
export const useAllStationList = (variables: Variables) => {
  const {
    offset = 0,
    order = 'clickcount',
    limit = 20,
    has_extended_info = true,
    is_https = true,
    hidebroken = true,
  } = variables
  const queryResult = useQuery<Station[], Error>({
    queryKey: stationKeys.lists(),
    queryFn: async () => {
      const url = new URL(`${configService.baseUrl}/stations`)
      const params = new URLSearchParams({
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
    staleTime: 1000 * 60 * 60,
  })
  return queryResult
}
