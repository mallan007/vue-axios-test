<template>
    <div class="nav">
        <router-link to="/"> Home </router-link>
        <router-link to="/add"> Adicionar Restaurante </router-link>
        <router-link to="/update/:id"> Editar Restaurante </router-link>
        <a href="#" @click="logout"> Logout </a>
    </div>
</template>

<script>
    export default {
        name: 'HeaderView',
        methods: {
            logout(){
                console.log('Logout');
                localStorage.clear();
                this.$router.push({name:'LoginView'});

            }
        }
    }
</script>

<style>
.nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: skyblue;
    overflow: hidden;
}
.nav a{
    color: white;
    padding: 14px 16px;
    font-size: 17px;
    text-decoration: none;
    text-align: center;
}
.nav a:hover{
    background-color: purple;
    color: skyblue;
}
</style>