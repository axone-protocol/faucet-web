/* eslint-disable @typescript-eslint/prefer-readonly-parameter-types */
import type { Chain } from './config.type'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const keplrChainConfig = (chain: Chain) => [
  {
    chainId: chain.id,
    chainName: chain.name,
    rpc: chain.endpoints.rpc,
    rest: chain.endpoints.rest,
    bip44: {
      coinType: 118
    },
    bech32Config: {
      bech32PrefixAccAddr: 'okp4',
      bech32PrefixAccPub: 'okp4pub',
      bech32PrefixValAddr: 'okp4valoper',
      bech32PrefixValPub: 'okp4valoperpub',
      bech32PrefixConsAddr: 'okp4valcons',
      bech32PrefixConsPub: 'okp4valconspub'
    },
    currencies: [
      {
        coinDenom: 'KNOW',
        coinMinimalDenom: 'uknow',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'KNOW',
        coinMinimalDenom: 'uknow',
        coinDecimals: 6
      }
    ],
    stakeCurrency: {
      coinDenom: 'KNOW',
      coinMinimalDenom: 'uknow',
      coinDecimals: 6
    },
    coinType: 118,
    gasPriceStep: {
      low: 0.01,
      average: 0.025,
      high: 0.03
    }
  }
]

export default keplrChainConfig
