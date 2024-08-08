<template>
    <h1>Criar uma nova conta</h1>
    <div class="register">
    <input type="text" v-model="name" placeholder="Informe o nome: "/>
    <input type="text" v-model="email" placeholder="Informe o e-mail: "/>
    <input type="password" v-model="password" placeholder="Informe a senha: "/>
    <button @click="signUp">Fazer Login</button>
    <p>Já possui uma conta? <router-link to="/login">Clique aqui</router-link></p>
  </div>
</template>
<script>
import axios from 'axios';

    export default {
        name: 'SignUp',
        data() {
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        methods: {
            async signUp() {
                let result = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });
                console.log(result);
                if(result.status == 201){
                    alert('Usuário criado com sucesso');
                    localStorage.setItem("user-info", JSON.stringify(result.data));
                    this.$router.push({name:'HomeView'});
                }
            }   
        },
                

    }

</script>

<style>

</style>