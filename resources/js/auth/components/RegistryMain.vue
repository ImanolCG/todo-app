<template>
    <v-container>
        <h4>Registrar Usuario</h4>
        <br><br>
        <v-form ref="form" lazy-validation class="pr-5">
            <span class="font-weight-bold">Nombre</span>
            <v-text-field
                v-model="form.name"
                :rules="rules.name"
                class="mt-2" color="#502889"
                dense outlined
                placeholder="Ingresa el nombre"
            ></v-text-field>

            <span class="font-weight-bold">Correo electrónico</span>
            <v-text-field
                v-model="form.email"
                :rules="rules.email"
                class="mt-2" color="#502889"
                dense outlined
                placeholder="Ingresa tu correo electrónico"
            ></v-text-field>

            <span class="font-weight-bold">Contraseña</span>
            <v-text-field
                v-model="form.password"
                :rules="rules.password"
                class="mt-2" color="#502889"
                dense outlined
                placeholder="Ingresa tu contraseña" type="password"
            ></v-text-field>
            <v-btn
                class="btn-login"
                @click="submit"
                :loading="isLoading"
                block dark rounded
            >
                    <span class="font-weight-bold">
                        Registrar
                    </span>
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
export default {
    name: "RegistryMain",
    data: () => ({
        isLoading: false,
        form: {
            name: '',
            email: '',
            password: ''
        },

        rules: {
            name: [
                v => !!v || 'El nombre es requerido.',
            ],
            email: [
                v => !!v || 'El correo es requerido.',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'El correo debe tener un formato válido.'
            ],
            password: [
                v => !!v || 'La contraseña es requerida.',
            ],
        }
    }),
    mounted(){
    },
    methods: {
        submit() {
            let valid = this.$refs.form.validate();
            let user = this.form;
            if (valid) {
                localStorage.setItem("authUser", JSON.stringify(user));
                this.$router.push({name: "login"});
            }
        },
    }
}
</script>

<style scoped>
.btn-login{
    background: linear-gradient(#6563ff, #5353d6);
    border-radius: 2rem;
}
</style>
