<template>
    <v-container>
        <v-form ref="form">
            <v-row>
                <v-col cols="12">
                    <p class="text-blue my-2"><b>Título:</b></p>
                    <v-text-field
                        v-model="title"
                        :rules="rules.title"
                        required
                        rounded
                        outlined
                        dense>
                    </v-text-field>
                </v-col>
                <v-col cols="12">
                    <p class="text-blue my-2"><b>Descripción:</b></p>
                    <v-textarea v-model="description"
                                :rules="rules.description"
                                outlined
                                required
                                rounded
                                class="rounded-xl"
                    ></v-textarea>
                </v-col>
                <v-col cols="12" class="p-0 pb-3 text-center">
                    <v-btn dark
                           class="rounded-lg"
                           @click="createTask"
                           :loading="loading" >
                        <span class="text-capitalize">Crear Tarea</span>
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>
export default {
    name: "CretaTaskMain",
    data: () => ({
        loading: false,
        tasksList:[],
        title: null,
        description: null,
        task:{},
        rules: {
            title: [
                v => !!v || 'EL título es requerido.',
            ],
            description: [
                v => !!v || 'La descripción es requerida.',
            ],
        }
    }),
    mounted(){
        this.tasksList = JSON.parse(localStorage.getItem('tasksList'));
    },
    methods:{
        createTask() {
            const valid = this.$refs.form.validate();
            this.task.id = this.create_UUID();
            this.task.title = this.title;
            this.task.descrition = this.description;
            this.task.status = 'Pendiente';
            if (valid) {
                if(this.tasksList==null){
                    this.tasksList = [];
                    this.tasksList.push(this.task);
                    localStorage.setItem("tasksList", JSON.stringify(this.tasksList));
                }else {
                    this.tasksList.push(this.task);
                    localStorage.setItem("tasksList", JSON.stringify(this.tasksList));
                }
                this.$router.push({name: "tasksList"});
            }
        },
        create_UUID(){
            let dt = new Date().getTime();
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                let r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c=='x' ? r :(r&0x3|0x8)).toString(16);
            });
            return uuid;
        }
    },
}
</script>

<style scoped>

</style>
