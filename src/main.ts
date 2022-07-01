import { createApp } from 'vue'
import App from './App.vue'
// style
import '@unocss/reset/tailwind.css'
import 'uno.css'
import { setupRouter } from './router'
import { setupGlobDirectives } from './directives'
// console.log(import.meta.env)
const bootstrap = function () {
  // setup router
  const app = createApp(App)
  setupRouter(app)
  setupGlobDirectives(app)
  app.mount('#app')
}
bootstrap()
