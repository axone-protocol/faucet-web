import type { AppProps } from 'next/app'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
