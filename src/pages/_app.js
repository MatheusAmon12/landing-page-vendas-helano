import App from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'

import createEmotionCache from '../../createEmotionCache'
import theme from '../../theme'
import Head from 'next/head'
 
export default function MyApp({ Component, pageProps }) {
  const cache = createEmotionCache()

  return (
    <>
      <Head>
        <title>Valorizando a Essência</title>
      </Head>
      <CssBaseline />
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
 
MyApp.getInitialProps = async (context) => {
  const ctx = await App.getInitialProps(context)
 
  return { ...ctx}
}