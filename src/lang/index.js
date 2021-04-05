import { createI18n } from 'vue-i18n'

import zhCNLocale from './zh_CN'

// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  zh_CN: zhCNLocale
}


const i18n = createI18n({
  locale: 'zh_CN', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})


export default i18n
