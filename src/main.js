import './assets/main.css'

import { createApp } from 'vue'
import pinia from './plugins/pinia'


import App from './App.vue'
import router from './router'
import { setupInterceptors } from '@/plugins/api';


const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

setupInterceptors()
