require('../bootstrap');

import Vue from 'vue';
import router from './router/router';
import vuetify from './vuetify/vuetify';

import App from "./pages/App";

const admin = new Vue({
  el: '#admin',
  router,
  vuetify,
  render: h => h(App)
})
