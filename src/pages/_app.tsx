// import '@/styles/globals.css'
import { ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import theme from '@/styles/globalTheme'
import '../styles/globals.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
