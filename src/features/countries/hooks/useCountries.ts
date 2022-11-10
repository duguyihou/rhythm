import { useQuery } from '@tanstack/react-query'

import configService from 'config'

import { Countries } from '../components'

export const useCountries = () => {
  const queryResult = useQuery<Countries, Error>({
    queryKey: ['countries'],
    queryFn: async () => {
      const res = await fetch(`${configService.baseUrl}/countries`)
      const result = await res.json()
      return result
    },
    suspense: true,
  })
  return queryResult
}
