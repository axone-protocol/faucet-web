/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CHAIN_ID: process.env.CHAIN_ID,
    FAUCET_URL: process.env.FAUCET_URL,
    CHAIN_NAME: process.env.CHAIN_NAME,
    CHAIN_RPC_ENDPOINT: process.env.CHAIN_RPC_ENDPOINT,
    CHAIN_REST_ENDPOINT: process.env.CHAIN_REST_ENDPOINT
  },
  experimental: {
    outputStandalone: true
  }
}

module.exports = nextConfig
