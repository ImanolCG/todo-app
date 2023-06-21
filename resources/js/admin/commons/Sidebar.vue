<template>
    <v-card
        height="400"
        width="256"
    >
        <v-navigation-drawer permanent>
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Application
                    </v-list-item-title>
                    <v-list-item-subtitle>
                        subtext
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
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
export default {
    name: "Sidebar",
    data () {
        return {
            items: [
                { title: 'Crear tarea', icon: 'mdi-view-dashboard', to: 'createTask'},
                { title: 'Listar tareas', icon: 'mdi-view-dashboard', to: 'createTask'},
                { title: 'Listar tareas completadas', icon: 'mdi-view-dashboard', to: 'createTask'},
                { title: 'Listar tareas pendientes', icon: 'mdi-view-dashboard', to: 'createTask'},
                { title: 'Completar tarea', icon: 'mdi-view-dashboard', to: 'createTask'},
                { title: 'Borrar tarea', icon: 'mdi-view-dashboard', to: 'createTask'},
                { title: 'Log out', icon: 'mdi-view-dashboard', to: 'createTask'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
