<template>
    <v-container class="h-100vh d-flex justify-content-center align-center fill-height">
        <v-card width="500">
            <v-card-title style="justify-content: center">
                <h1 class="my-5 text-blue text-center">¡Inicar Sesión!</h1>

            </v-card-title>
            <v-card-text style="justify-content: center">
                <v-img
                    src="/assets/image/avatar.png" class="align-self-center"
                    contain max-height="10rem" max-width="10rem"
                    style="margin: auto"
                />
                <v-form ref="form" lazy-validation class="pr-5">
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
                        Iniciar Sesión
                    </span>
                    </v-btn>
                </v-form>
                <hr>
                <router-link  :to="{name: 'registry'}">Registrarse</router-link>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "LoginMain",
    data: () => ({
        isLoading: false,
        form: {
            email: '',
            password: ''
        },

        rules: {
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
        async submit() {
            let valid = this.$refs.form.validate();
            const authUser = JSON.parse(localStorage.getItem("authUser"));
            if (valid) {
                if(authUser.email === this.form.email && authUser.password === this.form.password){
                    localStorage.setItem("authFlag", true);
                    this.$router.replace({name: "createTask"}); //push permite regresar a la pagina anterior, con replace no (con las flechas del navegador)
                }else{
                    this.alerta('error', 'Error al Iniciar Sesión', 'Correo o contraseña incorrectos');
                }
                // this.isLoading = true;
                // const {data} = await axios.post(route('login.auth'), {
                //     email: this.form.email,
                //     password: this.form.password
                // });
                // (data.success)
                //     ? window.location.href = "/main"
                //     : this.alert('error', 'Error', 'El usuario no existe');
                // this.isLoading = false;
            }
        },
        alerta(icon, title, text) {
            this.$swal({
                icon,
                title: title,
                text,
                showConfirmButton: false,
                timer: 2000,
            })
        }
    }
}
</script>

<style scoped>
.btn-login{
    background: linear-gradient(#6563ff, #5353d6);
    border-radius: 2rem;
}
</style>
