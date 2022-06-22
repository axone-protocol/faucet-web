import dynamic from 'next/dynamic'
import { useTheme } from '@okp4/ui'
import type { ThemeContextType } from '@okp4/ui'
import lightCosmos from '@okp4/ui/lib/assets/images/cosmos-clear.png'
import darkCosmos from '@okp4/ui/lib/assets/images/cosmos-dark.png'

const HeaderWithoutSSR = dynamic(async () => import('../header/Header'), {
  ssr: false
})

const FaucetWithoutSSR = dynamic(async () => import('../faucet/Faucet'), {
  ssr: false
})

const ContentWrapper: React.FC = () => {
  const { theme }: ThemeContextType = useTheme()
  const themedImage = theme === 'light' ? lightCosmos.src : darkCosmos.src

  return (
    <div className="okp4-faucet-testnet-content" style={{ backgroundImage: `url(${themedImage})` }}>
      <HeaderWithoutSSR />
      <FaucetWithoutSSR />
    </div>
  )
}

export default ContentWrapper
