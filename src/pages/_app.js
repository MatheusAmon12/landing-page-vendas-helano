import App from 'next/app'
import { useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import lozad from 'lozad'

import createEmotionCache from '../../createEmotionCache'
import theme from '../../theme'
import Head from 'next/head'
 
export default function MyApp({ Component, pageProps }) {
  const cache = createEmotionCache()
  
  useEffect(() => {
    const observer = lozad()
    observer.observe()
  }, [])

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