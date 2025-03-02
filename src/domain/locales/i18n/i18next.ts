import { Debug } from '@app/common/Debug'
import LanguageDetector from 'i18next-browser-languagedetector'
import configs from 'app.config'
import i18next from 'i18next'
import pt from '@app/domain/locales/i18n/pt'

i18next.use(LanguageDetector).init(
  {
    debug: false,
    lowerCaseLng: true,
    fallbackLng: configs.server.language,
    resources: { pt },
    interpolation: { escapeValue: false },
    defaultNS: 'common',
    ns: Object.keys(pt),
  },
  (err) =>
    err
      ? Debug.error(err)
      : Debug.info({
          message: `Locale has already loaded successfully (${i18next.language})`,
        }),
)

export default i18next
