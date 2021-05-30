import Vue from 'vue'
import App from './App.vue'
import FeathersPlugin from './feathers-client'
import vuetify from './vuetify-plugin' // path to vuetify export

import store from './store'

Vue.config.productionTip = false
Vue.use(FeathersPlugin)

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
