import { useQuery } from '@tanstack/react-query'

import configService from 'config'

import { GeoLocationInfo } from '../components'

export const useGeoLocation = () => {
  const queryResult = useQuery<GeoLocationInfo, Error>({
    queryKey: ['geoLocation'],
    queryFn: async () => {
      const res = await fetch(`${configService.ipUrl}`)
      const result = await res.json()
      return result
    },
    staleTime: Infinity,
    cacheTime: Infinity,
    suspense: true,
  })
  return queryResult
}
