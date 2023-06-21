<template>
    <div>
    <Sidebar></Sidebar>
    <router-view></router-view>
    </div>
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
