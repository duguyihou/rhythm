import { createQuery } from 'react-query-kit'

import configService from '../../../config'
import { Countries } from '../components/Countries.types'

export const useCountries = createQuery<Countries>({
  primaryKey: '/countries',
  queryFn: async ({ queryKey: [primaryKey] }) => {
    const res = await fetch(`${configService.baseUrl}${primaryKey}`)
    const result = await res.json()
    return result
  },
  suspense: true,
})
