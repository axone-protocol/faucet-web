import type { DeepReadonly } from '@okp4/ui'
import { StoreProvider as ReduxStoreProvider } from '@okp4/ui'
import type { Config } from '../../config/config.type'
import { storeParameters } from '../../store/index'

type ProviderProps = {
  config: Config
  children: React.ReactElement
}

const StoreProvider: React.FC<ProviderProps> = ({ config, children }: DeepReadonly<ProviderProps>) => (
  <ReduxStoreProvider storeParameters={storeParameters(config)}>{children}</ReduxStoreProvider>
)

export default StoreProvider
