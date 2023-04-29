import { createI18n } from 'vue-i18n'
// @ts-ignore
import messages from '@intlify/vite-plugin-vue-i18n/messages'
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('selected-locale') || navigator.language.split('-')[0],
  messages,
  fallbackLocale: 'ar',
  globalInjection: true,
  availableLocales: ['en', 'ar'],
})

export default i18n
