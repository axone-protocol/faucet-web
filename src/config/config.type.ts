export type Config = {
  app: {
    title: string
    keywords: string
  }
  chain: Chain
  faucet: string
}

export type Chain = {
  id: string
  name: string
  endpoints: {
    rpc: string
    rest: string
  }
}
