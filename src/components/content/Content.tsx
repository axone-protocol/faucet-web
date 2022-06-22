import dynamic from 'next/dynamic'
import { Footer, loadTranslations, Typography, useTheme, useTranslation } from '@okp4/ui'
import type { ThemeContextType, UseTranslationResponse } from '@okp4/ui'
import lightCosmos from '@okp4/ui/lib/assets/images/cosmos-clear.png'
import darkCosmos from '@okp4/ui/lib/assets/images/cosmos-dark.png'
import { translationsToLoad } from '../../i18n/index'

const HeaderWithoutSSR = dynamic(async () => import('../header/Header'), {
  ssr: false
})

const FaucetWithoutSSR = dynamic(async () => import('../faucet/Faucet'), {
  ssr: false
})

const languages = [
  {
    name: 'English',
    lng: 'en'
  },
  {
    name: 'Français',
    lng: 'fr'
  }
]

const Okp4Link = (): JSX.Element => {
  const { t }: UseTranslationResponse = useTranslation()

  return (
    <Typography as="p" color="highlighted-text" fontSize="x-small" fontWeight="xlight" noWrap>
      {`${t('footer:brand-link')} `}
      <Typography color="highlighted-text" fontSize="x-small" fontWeight="bold">
        <a
          href="https://okp4.network/"
          rel="author noreferrer"
          style={{ textDecoration: 'unset', color: 'inherit' }}
          target="_blank"
        >
          ØKP4
        </a>
      </Typography>
    </Typography>
  )
}

const Content: React.FC = () => {
  const { theme }: ThemeContextType = useTheme()
  const themedImage = theme === 'light' ? lightCosmos.src : darkCosmos.src
  loadTranslations(translationsToLoad)

  return (
    <div className="okp4-faucet-testnet-content" style={{ backgroundImage: `url(${themedImage})` }}>
      <HeaderWithoutSSR />
      <FaucetWithoutSSR />
      <Footer languages={languages} lastElement={<Okp4Link />} />
    </div>
  )
}

export default Content
