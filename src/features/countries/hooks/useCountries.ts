import { useQuery } from '@tanstack/react-query'
import type { QueryFunction, QueryKey } from '@tanstack/react-query'

import configService from 'config'

import { Countries } from '../components'

type Variables = {
  order?: string
  reverse?: boolean
  hidebroken?: boolean
  offset?: number
  limit?: number
}
export const fetchCountries = async (variables: Variables) => {
  const {
    order = 'stationcount',
    reverse = true,
    hidebroken = true,
    offset = 0,
    limit = 12,
  } = variables
  const url = new URL(`${configService.baseUrl}/countries`)
  const params = new URLSearchParams({
    order,
    reverse: reverse.toString(),
    hidebroken: hidebroken.toString(),
    offset: offset.toString(),
    limit: limit.toString(),
  })
  url.search = params.toString()
  const res = await fetch(url)
  const result = await res.json()
  return result
}

export const useCountries = (queryFn: QueryFunction<Countries, QueryKey>) => {
  const queryResult = useQuery<Countries, Error>({
    queryKey: ['countries'],
    queryFn,
    suspense: true,
    keepPreviousData: true,
  })
  return queryResult
}
