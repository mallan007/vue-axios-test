<template>
    <HeaderView />
    <h1> Página Inicial </h1>
    <h3> Bem vindo, {{name}}. </h3>
    <table border="1">
        <tr>
            <td> ID </td>
            <td> Nome </td>
            <td> Endereço </td>
            <td> Contato </td>   
            <td> Detalhes </td>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <td>Id {{restaurant.id}} </td>
            <td> Name {{restaurant.name}} </td>
            <td> Address {{restaurant.address}} </td>
            <td> Contact {{restaurant.contact}} </td>   
            <td> 
            <router-link :to="'/update/'+restaurant.id"> Editar </router-link> 
            <button @click="deleteRestaurant(restaurant.id)"> Deletar </button> 
            </td>
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
        methods: {
        async deleteRestaurant(id) {          
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            console.log(result);        
            if(result.status == 200) {
                this.loadData();  
            }   
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if(!user) {
                this.$router.push({name:'SignUp'});
            }
            let result = await axios.get("http://localhost:3000/restaurants");
            this.restaurants = result.data;
        },
        },
        async mounted() {
            this.loadData();
        }
       
    }

</script>