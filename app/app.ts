import Vue from 'nativescript-vue'
import App from '@/App.vue'
import { router } from '@/router'
import { store } from '@/store'

declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

router.push("/")

new Vue({
  render: (h) => h('frame', [h(App)]),
  router,
  store
}).$start()
