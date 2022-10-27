import Head from 'next/head'

const NextHead = () => {
  return (
    <Head>
      <title>Rhythm</title>
      <meta name="description" content="radio" />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default NextHead
