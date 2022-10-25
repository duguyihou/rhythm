import { ReactNode, Suspense } from 'react'

// eslint-disable-next-line import/named
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Spinner } from '../components/elements'

type AppProviderProps = {
  children: ReactNode
}

const queryClient = new QueryClient()

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Suspense>
  )
}

export default AppProvider
