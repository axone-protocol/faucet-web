/** @type {import('next').NextConfig} */
const { version } = require('./package.json');
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    version,
  },
  output: 'standalone',
}

module.exports = nextConfig