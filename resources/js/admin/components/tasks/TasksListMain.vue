<template>
    <v-container>
        <v-card v-for="task in tasksList" :key="task.id" style="margin: 25px">
            <v-card-title>
                <v-row>
                    <v-col cols="10"> {{task.title}} </v-col>
                    <v-col cols="2" v-if="task.status === 'Terminada'" style="color: green"> {{task.status}} </v-col>
                    <v-col cols="2" v-else-if="task.status === 'Trabajando'" style="color: yellow"> {{task.status}} </v-col>
                    <v-col cols="2" v-else style="color: red"> {{task.status}} </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                {{task.description}}
            </v-card-text>
            <v-divider/>
            <v-card-actions>
                <v-btn color="deep-purple lighten-2" text
                       @click="changeStatus()">
                    Cambiar estado
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "TasksListMain",
    data: () => ({
        tasksList: [],
    }),
    mounted(){
        this.tasksList = JSON.parse(localStorage.getItem('tasksList'));
    },
    methods:{
        changeStatus(){
            console.log("cambiar estado de la tarea");
        }
    }
}
</script>

<style scoped>

</style>
