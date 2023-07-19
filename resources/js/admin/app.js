require('../bootstrap');

import Vue from 'vue';
import router from './router/router';
import VueSweetalert2  from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import vuetify from './vuetify/vuetify';

import App from "./pages/App";

export const bus = new Vue();
Vue.use(VueSweetalert2);

const admin = new Vue({
  el: '#admin',
  router,
  vuetify,
  render: h => h(App)
})
