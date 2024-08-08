<template>
    <HeaderView />
    <h1> Página Inicial </h1>
    <p> Bem vindo, {{name}}. </p>
    <table border="1">
        <tr>
            <td> ID </td>
            <td> Nome </td>
            <td> Endereço </td>
            <td> Contato </td>   
            <td> Detalhes </td>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <td> {{restaurant.id}} </td>
            <td> {{restaurant.name}} </td>
            <td> {{restaurant.address}} </td>
            <td> {{restaurant.contact}} </td>   
            <td> <router-link :to="'/update/'+restaurant.id"> Editar </router-link> </td>
        </tr>
    </table>    

</template>
<script>
import HeaderView from './HeaderView.vue';
import axios from 'axios';

    export default {
        name: 'HomeView',
        data() {
            return {
                name: '',  
                address: '',
                contact: '',
                restaurants:[],
            }
        },
        components: {
            HeaderView
        },
        async mounted() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if(!user) {
                this.$router.push({name:'SignUp'});
            }
            let result = await axios.get("http://localhost:3000/restaurants");
            console.log(result);
            this.restaurants = result.data;
        },
       
    }
</script>