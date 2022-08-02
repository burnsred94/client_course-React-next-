import '../styles/globals.css'
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from '../node_modules/next/head';




function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
    <Head>
      <title>E GURU</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
