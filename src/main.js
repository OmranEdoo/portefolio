import { createApp } from 'vue'
import App from './App.vue'
const Vue3Mq = require('vue3-mq');

const app = createApp(App)

app
.component('MqResponsive', Vue3Mq.MqResponsive)
.mount('#app')

// Options
Vue3Mq.updateBreakpoints({
  preset: "bootstrap5"
})