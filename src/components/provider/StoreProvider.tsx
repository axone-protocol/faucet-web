import type { DeepReadonly } from '@okp4/ui'
import { StoreProvider as ReduxStoreProvider } from '@okp4/ui'
import { storeParameters } from '../../store/index'

type ProviderProps = {
  children: React.ReactElement
}

const StoreProvider: React.FC<ProviderProps> = ({ children }: DeepReadonly<ProviderProps>) => (
  <ReduxStoreProvider storeParameters={storeParameters}>{children}</ReduxStoreProvider>
)

export default StoreProvider
