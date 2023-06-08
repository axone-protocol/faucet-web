import type { AppProps } from 'next/app'
import type { Config } from '../config/config.type'
import dynamic from 'next/dynamic'
import './styles.scss'
import { useEffect, useState } from 'react'

const ThemeProvider = dynamic(async () => (await import('@okp4/ui')).ThemeProvider, {
  ssr: false
})

const StoreProvider = dynamic(async () => import('../components/provider/StoreProvider'), {
  ssr: false
})

const fetchConfig = async (): Promise<Config> => {
  const resp = await fetch('/api/config')
  const config: Config = await resp.json()

  return config
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
function MyApp({ Component, pageProps }: AppProps): JSX.Element | null {
  // eslint-disable-next-line @typescript-eslint/typedef
  const [config, setConfig] = useState<Config | null>(null)
  useEffect(() => {
    fetchConfig()
      .then(setConfig)
      .catch((error: unknown) => console.error(error))
  }, [])

  return config ? (
    <ThemeProvider>
      <StoreProvider config={config}>
        <Component
          {...pageProps}
          captcha={config.captcha}
          chainId={config.chain.id}
          keywords={config.app.keywords}
          title={config.app.title}
        />
      </StoreProvider>
    </ThemeProvider>
  ) : null
}

export default MyApp
