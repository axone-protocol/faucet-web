import { List } from 'immutable'
import {
  createEventBusInstance,
  HTTPFaucetGateway,
  ErrorStoreBuilder,
  FaucetStoreBuilder,
  FaucetContext,
  ErrorContext,
  KeplrWalletGateway,
  TaskContext,
  TaskStoreBuilder,
  WalletContext,
  WalletRegistryGateway,
  WalletStoreBuilder
} from '@okp4/ui'
import type { StoreParameter } from '@okp4/ui'
import keplrChainConfig from '../config/keplr'
import type { Config } from '../config/config.type'

// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const storeParameters = (config: Config): List<StoreParameter> => {
  const eventBusInstance = createEventBusInstance()

  // Faucet
  const faucetGateway = new HTTPFaucetGateway(config.faucet)
  const faucetStore = new FaucetStoreBuilder()
    .withEventBus(eventBusInstance)
    .withDependencies({ faucetGateway })
    .build()
  const faucetStoreParameter: StoreParameter = [FaucetContext, faucetStore]

  // Error
  const errorStore = new ErrorStoreBuilder().withEventBus(eventBusInstance).build()
  const errorStoreParameter: StoreParameter = [ErrorContext, errorStore]

  // Task
  const taskStore = new TaskStoreBuilder().withEventBus(eventBusInstance).build()
  const taskStoreParameter: StoreParameter = [TaskContext, taskStore]

  // Wallet
  const walletRegistryGateway = new WalletRegistryGateway()
  const keplrGateway = new KeplrWalletGateway(keplrChainConfig(config.chain))
  walletRegistryGateway.register(keplrGateway)
  const walletStore = new WalletStoreBuilder()
    .withEventBus(eventBusInstance)
    .withDependencies({ walletRegistryGateway })
    .build()
  const walletStoreParameter: StoreParameter = [WalletContext, walletStore]

  return List([faucetStoreParameter, errorStoreParameter, walletStoreParameter, taskStoreParameter])
}
