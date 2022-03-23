import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import 'dropzone-vue/dist/dropzone-vue.common.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import $ from 'jquery'
// Vue.prototype.$ = $;
// window.$ = window.jQuery = jQuery
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store).use(router).use($).use(VueAxios, axios).mount('#app')