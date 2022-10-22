import type { NextPage } from 'next'

import { Footer } from '../components/footer'
import { Head } from '../components/head'
import { MainLayout } from '../components/layout'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <MainLayout>
        <h1 className="text-3xl underline">Welcome to Rhythm</h1>
      </MainLayout>
      <Footer />
    </>
  )
}

export default Home
