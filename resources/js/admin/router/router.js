import Vue from 'vue';
import VueRouter from 'vue-router';

import CreateTaskIndex from "../pages/create/CreateTaskIndex";

Vue.use(VueRouter);

let routes = [
    {
        path: 'create-task',
        component: CreateTaskIndex,
        name: 'createTask',
        meta: {
            title: 'Crear Tarea',
            parent: '#'
        }
    }
];

export default new VueRouter({
    mode: 'history',
    routes: routes
});
