import "../styles/globals.css"
import Head from "next/head"
import Nav from "../components/nav"
import Impressum from "../components/impressum"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MK-Reinigung</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <div className="px-4 sm:px-16 md:px-32 xl:px-40 2xl:px-96 text-center bg-green-100">
        <Component {...pageProps} />
        <Impressum />
      </div>
    </>
  )
}

export default MyApp
