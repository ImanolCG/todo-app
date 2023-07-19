<template>
    <v-card
        width="256"
        style="height: 100%"
    >
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        VUE-2
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        JICG
                    </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                dense
                nav
            >
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="{name: item.to}"
                    link
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                    link
                    @click="logout"
                >
                    <v-list-item-icon>
                        <v-icon>{{this.logoutIcon}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Cerrar Sesion</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    name: "Sidebar",
    data () {
        return {
            logoutIcon:'mdi-view-dashboard',
            items: [
                { title: 'Login', icon: 'mdi-view-login', to: 'login'},
                { title: 'Crear tarea', icon: 'mdi-view-dashboard', to: 'createTask'},
                { title: 'Listar tareas', icon: 'mdi-view-dashboard', to: 'tasksList'},
                { title: 'Listar tareas completadas', icon: 'mdi-view-dashboard', to: 'completedTasksList'},
                { title: 'Listar tareas pendientes', icon: 'mdi-view-dashboard', to: 'pendingTasksList'},
                { title: 'Completar tarea', icon: 'mdi-view-dashboard', to: 'completeTask'},
                { title: 'Borrar tarea', icon: 'mdi-view-dashboard', to: 'deleteTask'},
            ]
        }
    },
    methods:{
        logout(){
            localStorage.setItem("authFlag", false);
            // localStorage.removeItem("authUser");
            // this.$router.replace({name: "login"});
        }
    }
}
</script>

<style scoped>

</style>
