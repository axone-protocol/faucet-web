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
      bech32PrefixAccAddr: 'axone',
      bech32PrefixAccPub: 'axonepub',
      bech32PrefixValAddr: 'axonevaloper',
      bech32PrefixValPub: 'axonevaloperpub',
      bech32PrefixConsAddr: 'axonevalcons',
      bech32PrefixConsPub: 'axonevalconspub'
    },
    currencies: [
      {
        coinDenom: 'AXONE',
        coinMinimalDenom: 'uaxone',
        coinDecimals: 6
      }
    ],
    feeCurrencies: [
      {
        coinDenom: 'AXONE',
        coinMinimalDenom: 'uaxone',
        coinDecimals: 6
      }
    ],
    stakeCurrency: {
      coinDenom: 'AXONE',
      coinMinimalDenom: 'uaxone',
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
