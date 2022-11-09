import '../index.css'

import type { AppProps } from 'next/app'

import { MainLayout } from 'components/layout'
import AppProvider from 'providers/AppProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppProvider>
  )
}

export default MyApp
