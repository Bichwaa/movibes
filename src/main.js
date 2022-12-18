import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuestic } from 'vuestic-ui';
// import * as dotenv from 'dotenv'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'vuestic-ui/css'

// dotenv.config()

const app = createApp(App)

app.use(createPinia())
app.use(router)
.use(createVuestic({
    config: {
        colors: {
          variables: {
            // Default colors
            // primary: '#23e066',
            // secondary: '#002c85',
            // success: '#40e583',
            // info: '#2c82e0',
            // danger: '#e34b4a',
            // warning: '#ffc200',
            // gray: '#babfc2',
            // dark: '#34495e',
  
            // Custom colors
            theWhite: 'white',
          },
        },}
}))

app.mount('#app')
