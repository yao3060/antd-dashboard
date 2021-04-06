import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'

import store from './store'
import router from './router'
import i18n from './lang'

/**
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV !== 'production') {
  require('../mock')
}

const app = createApp(App)
app.config.productionTip = false

app.use(Antd).use(router).use(store).use(i18n)
app.mount('#app')
