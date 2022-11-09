// eslint-disable-next-line import/named
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'

import MainLayout from '../MainLayout'
jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}))
test('mainLayout', () => {
  const queryClient = new QueryClient()
  const children = <h1>mainLayout</h1>

  const mainLayout = render(
    <QueryClientProvider client={queryClient}>
      <MainLayout>{children}</MainLayout>
    </QueryClientProvider>
  )

  expect(mainLayout).toMatchSnapshot()
})
