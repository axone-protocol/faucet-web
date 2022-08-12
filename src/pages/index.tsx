import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

// Components using document or window elements must disable ssr to be used on client side
// https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
const ContentWithoutSSR = dynamic(async () => import('../components/content/Content'), {
  ssr: false
})

type HomeProps = {
  title: string
  keywords: string
  chainId: string
}

const Home: NextPage<HomeProps> = ({ title, keywords, chainId }: Readonly<HomeProps>) => {
  return (
    <div className="okp4-faucet-testnet-main">
      <Head>
        <title>{title}</title>
        <meta content={keywords} name="keywords" />
        <link href="/okp4-logo.png" rel="icon" />
      </Head>

      <ContentWithoutSSR chainId={chainId} />
    </div>
  )
}

export default Home
