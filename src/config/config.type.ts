export type Config = {
  app: {
    title: string
    keywords: string
  }
  chain: Chain
  faucet: string
  captcha: Captcha
}

export type Chain = {
  id: string
  name: string
  endpoints: {
    rpc: string
    rest: string
  }
}
export type Captcha = {
  recaptchaV2: {
    siteKey: string
  }
}
