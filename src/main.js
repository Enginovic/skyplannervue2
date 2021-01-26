import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

window.addEventListener('message', e => {
  if (
    e.data &&
    typeof e.data === 'string' &&
    e.data.match(/webpackHotUpdate/)
  ) {
    console.log('hot reload happened')
    console.clear()
  }
})
