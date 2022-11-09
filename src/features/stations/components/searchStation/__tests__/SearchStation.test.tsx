// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'

import SearchStation from '../SearchStation'

test('searchStation', () => {
  const queryClient = new QueryClient()
  const searchStation = render(
    <QueryClientProvider client={queryClient}>
      <SearchStation />
    </QueryClientProvider>
  )

  expect(searchStation).toMatchSnapshot()
})
