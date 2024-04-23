import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="For Sale" />
        <p className="description">
              PID 7525695</code>
        </p>
        <p>
              test
        </p>
      </main>

      <Footer />
    </div>
  )
}
