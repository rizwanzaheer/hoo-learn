import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// 3rd parties libs
import Antd from 'ant-design-vue';

// css
import './tailwind.css'

import 'ant-design-vue/dist/antd.css';

// Components
import App from './App.vue'
import { routes } from './routes.js'

// Store
import store from './store';

// i18n
import { createI18n } from './i18n/i18n';
const i18n = createI18n();

const app = createApp(App)
app.config.productionTip = false;

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(store)
app.use(i18n)
app.use(Antd);
app.mount('#app')
