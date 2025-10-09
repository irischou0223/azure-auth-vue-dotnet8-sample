import { createApp } from 'vue'
import App from './App.vue'
import { msalInstance } from './msal'

const app = createApp(App)
app.use(msalInstance)
app.mount('#app' )
