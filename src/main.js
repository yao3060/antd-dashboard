import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App'
import 'ant-design-vue/dist/antd.css'

import store from './store'
import router from './router'
import i18n from './lang'

const app = createApp(App)
app.config.productionTip = false

app.use(Antd).use(router).use(store).use(i18n)
app.mount('#app')
