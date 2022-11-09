import { useQuery } from '@tanstack/react-query'

import configService from '../../../config'
import { Station } from '../components'
import { stationKeys } from './stationKeys'

type Variables = { name: string }

export const useStationSearchByName = (variables: Variables) => {
  const { name } = variables
  const queryResult = useQuery<Station[], Error>({
    queryKey: stationKeys.searchList(name),
    queryFn: async () => {
      const url = `${configService.baseUrl}/stations/byname/${name}`
      const res = await fetch(url)
      const result = await res.json()
      return result
    },
    suspense: true,
    enabled: false,
  })
  return queryResult
}
