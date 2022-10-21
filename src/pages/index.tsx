import type { NextPage } from 'next'

import { Footer } from '../components/footer'
import { Head } from '../components/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <main>
        <h1 className="text-3xl underline">Welcome to Rhythm</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Home
