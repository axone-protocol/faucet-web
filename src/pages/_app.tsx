import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import './styles.scss'

const ThemeProvider = dynamic(async () => (await import('@okp4/ui')).ThemeProvider, {
  ssr: false
})

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
