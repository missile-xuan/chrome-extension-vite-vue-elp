import './assets/less/main.less'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import App from './App.vue'

const mainDiv = document.createElement('dev')
mainDiv.id = import.meta.env.VITE_BASE_ID

mainDiv.style.left = '0px'
mainDiv.style.top = '0px'
mainDiv.style.width = '500px'
mainDiv.style.height = '500px'
mainDiv.style.background = 'white'
mainDiv.style.border = '1px solid #E4E7ED'
mainDiv.style.boxShadow = '-1px 1px 20px #888888'
mainDiv.style.borderRadius = '3px'
mainDiv.style.fontFamily = 'PingFangSC-Regular'
mainDiv.style.position = 'fixed'
mainDiv.style.display = 'flex'
mainDiv.style.flexDirection = 'column'

const minimizeDiv = document.createElement('div')
minimizeDiv.id = import.meta.env.VITE_BASE_ID + '-thumbnail'
minimizeDiv.style.right = '0px'
minimizeDiv.style.top = '140px'
minimizeDiv.style.display = 'none'
minimizeDiv.style.backgroundColor = 'red'
minimizeDiv.style.width = '50px'
minimizeDiv.style.height = '50px'
minimizeDiv.style.position = 'fixed'
document.body.appendChild(mainDiv)
document.body.appendChild(minimizeDiv)

const app = createApp(App)
  .use(ElementPlus)
  .use(createPinia())

app.mount('#' + import.meta.env.VITE_BASE_ID)
