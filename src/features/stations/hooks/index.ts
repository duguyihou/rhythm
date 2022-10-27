import { createQuery } from 'react-query-kit'

import configService from '../../../config'
import {
  StationProps,
  Filter,
} from '../components/stationList/StationList.types'

type StationList = StationProps[]

type Variables = { filter: keyof typeof Filter; offset: number }

export const useStationList = createQuery<StationList, Variables, Error>({
  primaryKey: '/stations',
  queryFn: async ({ queryKey: [primaryKey, { filter, offset }] }) => {
    const url = `${configService.baseUrl}${primaryKey}/${filter}${
      offset ? `/${offset}` : ''
    }`
    const res = await fetch(url)
    const result = await res.json()
    return result
  },
  suspense: true,
})
