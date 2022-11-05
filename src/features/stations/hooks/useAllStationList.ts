import { useQuery } from '@tanstack/react-query'

import configService from '../../../config'
import { Station } from '../components'
import { stationKeys } from './stationKeys'

export const useAllStationList = () => {
  const queryResult = useQuery<Station[], Error>({
    queryKey: stationKeys.all,
    queryFn: async () => {
      const url = `${configService.baseUrl}/stations`
      const res = await fetch(url)
      const result = await res.json()
      return result
    },
    suspense: true,
    staleTime: 1000 * 60 * 60,
  })
  return queryResult
}
