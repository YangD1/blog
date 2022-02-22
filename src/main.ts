import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/global.scss'
import App from './App.vue'

const app = createApp(App as any)
app.use(ElementPlus)
app.mount('#app')