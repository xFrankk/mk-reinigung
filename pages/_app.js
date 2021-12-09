import "../styles/globals.css"
import Head from "next/head"
import Nav from "../components/nav"
import Impressum from "../components/impressum"

function MyApp({ Component, pageProps }) {
  return (
    <div className="font-outfit text-gray-700 font-semibold">
      <Head>
        <title>MK-Reinigung</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Impressum />
    </div>
  )
}

export default MyApp
