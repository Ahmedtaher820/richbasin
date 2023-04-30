import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n'
import 'aos/dist/aos.css'
import router from './router'
import "./assets/style.css"
import 'aos/dist/aos.css'
import { GoogleMap, Marker } from "vue3-google-map";

// @ts-ignore

import AOS from "aos";
AOS.init();
const app = createApp(App)
app.use(createPinia())
app.use(i18n)
app.use(router)
app.mount('#app')
