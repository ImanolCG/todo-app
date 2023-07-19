<template>
    <v-app>
        <v-row>
            <v-col cols="3">
                <Sidebar></Sidebar>
            </v-col>
            <v-col cols="9">
                <router-view></router-view>
            </v-col>
        </v-row>
    </v-app>
</template>

<script>
import Sidebar from "../commons/Sidebar";
export default {
    name: "App",
    components: {Sidebar},

}
</script>

<style scoped>

</style>
