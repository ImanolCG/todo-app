window.axios = require('axios');
window.Vue = require('vue').default;

import Vue from 'vue';
import vuetify from "../admin/vuetify/vuetify";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import Login from "./Login";


const login = new Vue({
    el: '#login',
    vuetify,
    render: h => h(Login)
})

