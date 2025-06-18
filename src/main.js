import './assets/main.css'//자바스크립트에서하는 다운로드요청

import { createApp } from 'vue'//객체주소값은 주지만 함수면함수 값이면 값만 부분적으로 줌
import { createPinia } from 'pinia' //{}요안에 이름은 바뀌면 안됨

import App from './App.vue' 
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
