import { createApp } from 'vue'
import App from './App.vue'
// style
import 'uno.css'
import { setupRouter } from './router'
// console.log(import.meta.env)
const bootstrap = function () {
  // setup router
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}
bootstrap()
