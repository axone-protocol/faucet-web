import { loadTranslations } from '@okp4/ui'
import footer_en from './footer_en.json'
import footer_fr from './footer_fr.json'
import faucet_en from './faucet_en.json'
import faucet_fr from './faucet_fr.json'

const translationsToLoad = [
  { lng: 'en', namespace: 'footer', resource: footer_en },
  { lng: 'fr', namespace: 'footer', resource: footer_fr },
  { lng: 'en', namespace: 'faucet', resource: faucet_en },
  { lng: 'fr', namespace: 'faucet', resource: faucet_fr }
]

loadTranslations(translationsToLoad, true)
