import {
  Faucet,
  Footer,
  Header,
  loadTranslations,
  Typography,
  useTheme,
  useTranslation,
  Logo
} from '@okp4/ui'
import type { ThemeContextType, UseTranslationResponse } from '@okp4/ui'
import lightCosmos from '@okp4/ui/lib/assets/images/cosmos-clear.png'
import darkCosmos from '@okp4/ui/lib/assets/images/cosmos-dark.png'
import { translationsToLoad } from '../../i18n/index'

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
          className="okp4-brand-link"
          href="https://okp4.network/"
          rel="author noreferrer"
          target="_blank"
        >
          ØKP4
        </a>
      </Typography>
    </Typography>
  )
}
type ContentProps = {chainId: string}
// eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
export const Content: React.FC<ContentProps> = ({chainId}: ContentProps) => {
  const { theme }: ThemeContextType = useTheme()
  const themedImage = theme === 'light' ? lightCosmos.src : darkCosmos.src
  loadTranslations(translationsToLoad)

  return (
    <div className="okp4-faucet-testnet-content" style={{ backgroundImage: `url(${themedImage})` }}>
      <Header firstElement={<Logo size="small" />} />
      <div className="okp4-faucet-content">
        <Faucet chainId={chainId} />
      </div>
      <Footer languages={languages} lastElement={<Okp4Link />} />
    </div>
  )
}

export default Content
