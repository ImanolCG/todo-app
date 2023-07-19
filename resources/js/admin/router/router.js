import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from "../../auth/Login";
import RegistryMain from "../../auth/components/RegistryMain";
import CreateTaskIndex from "../pages/tasks/CreateTaskIndex";
import TasksListIndex from "../pages/tasks/TasksListIndex";
import CompletedTasksListIndex from "../pages/tasks/CompletedTasksListIndex";
import PendingTasksListIndex from "../pages/tasks/PendingTasksListIndex";
import CompleteTaskIndex from "../pages/tasks/CompleteTaskIndex";
import DeleteTaskIndex from "../pages/tasks/DeleteTaskIndex";

Vue.use(VueRouter);

let routes = new VueRouter({
    mode: 'history',
    routes:  [
        {
            path: 'login',
            component: Login,
            name: 'login',
            beforeEnter(to, from, next) {
                if(localStorage.getItem("authFlag")){
                    next({name: "createTask"});
                }else{
                    next();
                }
            },
        },
        {
            path: 'registry',
            component: RegistryMain,
            name: 'registry',
            beforeEnter(to, from, next) {
                if(localStorage.getItem("authFlag")){
                    next({name: "createTask"});
                }else{
                    next();
                }
            },
        },
        {
            path: 'tasks-tasks',
            component: CreateTaskIndex,
            name: 'createTask',
            meta: {
                requireAuth: true,
                title: 'Crear Tarea',
                parent: '#'
            }
        },
        {
            path: 'tasks-list',
            component: TasksListIndex,
            name: 'tasksList',
            meta: {
                requireAuth: true,
                title: 'Lista de Tareas',
                parent: '#'
            }
        },
        {
            path: 'completed-tasks-list',
            component: CompletedTasksListIndex,
            name: 'completedTasksList',
            meta: {
                requireAuth: true,
                title: 'Lista de Tareas Completadas',
                parent: '#'
            }
        },
        {
            path: 'pending-tasks-list',
            component: PendingTasksListIndex,
            name: 'pendingTasksList',
            meta: {
                requireAuth: true,
                title: 'Lista de Tareas Pendientes',
                parent: '#'
            }
        },
        {
            path: 'complete-tasks',
            component: CompleteTaskIndex,
            name: 'completeTask',
            meta: {
                requireAuth: true,
                title: 'completar Tarea',
                parent: '#'
            }
        },
        {
            path: 'delete-tasks',
            component: DeleteTaskIndex,
            name: 'deleteTask',
            meta: {
                requireAuth: true,
                title: 'Eliminar Tarea',
                parent: '#'
            }
        },
    ]
});


routes.beforeEach((to, from, next) => {
   if(to.matched.some((record) => record.meta.requireAuth)){
        if(localStorage.getItem("authFlag")){
            next();
        }else{
            next({name: "login"});
        }
   }else{
       next();
   }
});

export default routes;
