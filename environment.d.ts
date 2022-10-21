declare namespace NodeJS {
  interface ProcessEnv {
    APP_TITLE: string
    APP_KEYWORDS: string
    CHAIN_ID: string
    FAUCET_URL: string
    CHAIN_NAME: string
    CHAIN_RPC_ENDPOINT: string
    CHAIN_REST_ENDPOINT: string
  }
}

declare module 'next/config' {
  declare const _default: () => {
    publicRuntimeConfig: {
      version: string
    }
  }

  export default _default
}
