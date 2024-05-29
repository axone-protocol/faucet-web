import React from 'react'
import type { NextPage } from 'next'
import getConfig from 'next/config'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import type { Captcha } from '../config/config.type'

// Components using document or window elements must disable ssr to be used on client side
// https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
const ContentWithoutSSR = dynamic(async () => import('../components/content/Content'), {
  ssr: false
})

// eslint-disable-next-line @typescript-eslint/typedef
const { publicRuntimeConfig } = getConfig()

type HomeProps = {
  title: string
  keywords: string
  chainId: string
  captcha: Captcha
}

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
const Home: NextPage<HomeProps> = ({ title, keywords, chainId, captcha }: Readonly<HomeProps>) => {
  return (
    <div className="axone-faucet-testnet-main">
      <Head>
        <title>{title}</title>
        <meta content={keywords} name="keywords" />
        <link href="/okp4-logo.png" rel="icon" />
        <meta content={publicRuntimeConfig.version} name="version" />
      </Head>

      <ContentWithoutSSR captcha={captcha} chainId={chainId} />
    </div>
  )
}

export default Home
