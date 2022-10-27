import { createQuery } from 'react-query-kit'

import configService from '../../../config'
import { StationProps, Filter } from '../components/radioList/RadioList.types'

type RadioList = StationProps[]

type Variables = { filter: keyof typeof Filter; offset: number }

export const useRadioList = createQuery<RadioList, Variables, Error>({
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
