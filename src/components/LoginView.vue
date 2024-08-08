<template>
    <h1>Página de Login</h1>
    <div class="register">
    <input type="text" v-model="email" placeholder="Informe o e-mail: "/>
    <input type="password" v-model="password" placeholder="Informe a senha: "/>
    <button @click="logIn">Login</button>
    <p><router-link to="/sign-up">Criar uma conta</router-link></p>
  </div>

</template>

<script>
import axios from 'axios';
    export default {
        name: 'LoginView',
        data() {
            return {
                email: '',
                password: '',   
            }
        },
        methods: {
            async logIn() {
                let result = await axios.get (
                    `http://localhost:3000/users?email=${this.email}&password=${this.password}`)
                    console.log(result);
                if(result.status == 200 && result.data.length>0) {
                    alert(`'Usuário ${result.data[0].name} logado com sucesso'`);
                    localStorage.setItem("user-info",JSON.stringify(result.data[0]));
                    this.$router.push({name:'HomeView'});
                    console.log(result);
                }
            },    
        },
        mounted() {
        let user = localStorage.getItem('user-info');
        if(user) {
            this.$router.push({name:'HomeView'});
        }
        },
        }   
    
</script>