import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'animate.css';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
