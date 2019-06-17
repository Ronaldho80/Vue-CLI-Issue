//import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
//import router from './router'
import './stylus/main.styl'
//import store from './store'
import Vuetify from 'vuetify'
//import VueLogger from 'vuejs-logger'
//import VueWorker from 'vue-worker'
//import VueWait from 'vue-wait'
//import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

//document.title = "LTX2"

let host = 'http://' + window.location.hostname
if (window.webpackHotUpdate) {
  // dev mode
  Vue.prototype.$hostname = host + ':8081'
} else {
  Vue.prototype.$hostname = host + ':8000'
}

Vue.use(Vuetify, {
  icons: {
    'test': 'test'
  }
})

new Vue({
    render: h => h(App),
  /*
    wait: new VueWait({
        registerComponents: false,
        componentName: 'my-waiter'
    }),
    */
}).$mount('#app')
